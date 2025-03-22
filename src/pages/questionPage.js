import {
  QUESTION_IMAGE_ID,
  QUESTION_EXPLANATION_ID,
  QUESTION_NUMBER_ID,
  ANSWERS_LIST_ID,
  RESTART_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  CURRENT_SCORE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { quizData } from '../data.js';
import { createNavigation } from '../views/navigationView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // Create question page structure and write the question itself
  const questionElement = createQuestionElement(
    currentQuestion.text,
    quizData.currentQuestionIndex,
    currentQuestion.imgLink,
    currentQuestion.explanation
  );
  userInterface.appendChild(questionElement);

  // Add the question's explanation
  const questionExplanation = document.getElementById(QUESTION_EXPLANATION_ID);
  questionExplanation.textContent = currentQuestion.explanation;

  // Create the answers and append them to ANSWERS_LIST_ID
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  answersListElement.addEventListener('click', (event) => {
    checkAnswer(event, currentQuestion);
    nextQuestionButton.disabled = false;
  });

  const nav = createNavigation(quizData.score);
  userInterface.appendChild(nav);

  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.addEventListener('click', nextQuestion);

  const restartQuizButton = document.getElementById(RESTART_BUTTON_ID);
  restartQuizButton.addEventListener('click', initWelcomePage);

  updateCurrentScore();
  saveState();
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const selectAnswer = (event, currentQuestion, nextButton) => {
  const answerElement = event.target;
  const answerKey = event.target.dataset.key;

  // Only proceed if the answer hasn't been selected yet, and the target is an <LI> element
  if (currentQuestion.selected || answerElement.tagName != 'LI') return;

  // Set the selected answer and add the 'selected' class
  currentQuestion.selected = answerKey;
  nextButton.disabled = false;
  answerElement.classList.add('selected');

  return answerKey;
};

const checkAnswer = (event, currentQuestion, nextButton) => {
  const selectedAnswer = selectAnswer(event, currentQuestion, nextButton);
  if (!selectedAnswer) return; // if the answer selected -> function selectAnswer return undefined, so nothing will happen;
  if (selectedAnswer === currentQuestion.correct) {
    showCorrectAnswer(selectedAnswer);
    quizData.score += 10;
    updateCurrentScore();
  } else {
    showIncorrectAnswer(selectedAnswer);
    showCorrectAnswer(currentQuestion.correct);
  }
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

const updateCurrentScore = () => {
  const currentScore = document.getElementById(CURRENT_SCORE_ID);
  currentScore.textContent = quizData.score;
};

const saveState = () => {
  localStorage.setItem('currentIndex', quizData.currentQuestionIndex);
  localStorage.setItem('currentScore', quizData.score);
};

// this is just the logic for the counter, since it doesn't exist yet, I just populated the function with dummy data
/*
const progressBar = () => {
  const answersArray = ['correct', 'incorrect', 'correct', 'skipped', 'correct']
  const progressBar = document.getElementById(progressBarContainer);
  Array.from(progressBarContainer.children).forEach((child, inx) => {
    child.classList.add(answersArray[inx]);
  })
}
 */
