import {
  QUESTION_IMAGE_ID,
  QUESTION_EXPLANATION_ID,
  QUESTION_NUMBER_ID,
  ANSWERS_LIST_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // Create question page structure and write the question itself
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  // Write the question's explanation
  const questionExplanation = document.getElementById(QUESTION_EXPLANATION_ID);
  questionExplanation.textContent = currentQuestion.explanation;

  // Write the question number
  const questionNumber = document.getElementById(QUESTION_NUMBER_ID);
  questionNumber.textContent = quizData.currentQuestionIndex + 1;

  // Create the answers and append them to ANSWERS_LIST_ID
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  answersListElement.addEventListener('click', (event) => {
    checkAnswer(event, currentQuestion);
  });
  saveState();
  loadState();

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
  saveState();
};

const selectAnswer = (event, currentQuestion) => {
  const answerElement = event.target;
  const answerKey = event.target.dataset.key;

  // Only proceed if the answer hasn't been selected yet, and the target is an <LI> element
  if (currentQuestion.selected || answerElement.tagName != 'LI') return;

  // Set the selected answer and add the 'selected' class
  currentQuestion.selected = answerKey;
  answerElement.classList.add('selected');
  return answerKey;
};

const checkAnswer = (event, currentQuestion) => {
  const selectedAnswer = selectAnswer(event, currentQuestion);
  if (!selectedAnswer) return; // if the answer selected -> function selectAnswer return undefined, so nothing will happen;
  if (selectedAnswer === currentQuestion.correct) {
    showCorrectAnswer(selectedAnswer);
    quizData.score += 10;
  } else {
    showIncorrectAnswer(selectedAnswer);
    showCorrectAnswer(currentQuestion.correct);
  }

  // Activate Next Question button
  document.querySelector(`#${NEXT_QUESTION_BUTTON_ID}`).disabled = false;

  saveState();
};

const showCorrectAnswer = (correctAnswer) => {
  document
    .querySelector(`li[data-key="${correctAnswer}"]`)
    .classList.add('correct');
};

const showIncorrectAnswer = (selectedAnswer) => {
  document
    .querySelector(`li[data-key="${selectedAnswer}"]`)
    .classList.add('incorrect');

  document
    .querySelector(`#${QUESTION_EXPLANATION_ID}`)
    .classList.add('visible');
};

const saveState = () => {
  localStorage.setItem('currentIndex', quizData.currentQuestionIndex);
  localStorage.setItem('currentScore', quizData.score);
};

const loadState = () => {
  const savedIndex = localStorage.getItem('currentIndex');
  const savedScore = localStorage.getItem('currentScore');

  quizData.currentQuestionIndex = savedIndex ? parseInt(savedIndex) : 0;
  quizData.score = savedScore ? parseInt(savedScore) : 0;
};
