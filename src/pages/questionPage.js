import {
  QUESTION_EXPLANATION_ID,
  ANSWERS_LIST_ID,
  PROGRESS_BAR_ID,
  RESTART_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  CURRENT_SCORE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createProgressElement } from '../views/progressView.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { initResultPage } from '../pages/resultPage.js';
import { quizData } from '../data.js';
import { createNavigation } from '../views/navigationView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const currentNumberQuestion = quizData.currentQuestionIndex + 1;

  // Create question page structure and write the question itself
  const questionElement = createQuestionElement(
    currentQuestion.text,
    currentNumberQuestion,
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
    checkAnswer(event, currentQuestion, nextQuestionButton);
  });

  const nav = createNavigation();
  document.getElementById('question-container').appendChild(nav);

  // Create the progress elements and append them to PROGRESS_BAR_ID
  const progressBar = document.getElementById(PROGRESS_BAR_ID);
  const getStoredData = JSON.parse(localStorage.getItem('quizData'));

  for (const [key, question] of Object.entries(getStoredData.questions)) {
    const progressElement = createProgress(key, question);
    progressBar.appendChild(progressElement);
  }

  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);

  if (quizData.currentQuestionIndex + 1 != quizData.questions.length) {
    nextQuestionButton.addEventListener('click', nextQuestion);
  } else {
    nextQuestionButton.textContent = 'Get Result';
    nextQuestionButton.addEventListener('click', getResult);
  }

  const restartQuizButton = document.getElementById(RESTART_BUTTON_ID);
  restartQuizButton.addEventListener('click', () => {
    initWelcomePage();
    localStorage.clear();
  });

  const skipQuestionButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  skipQuestionButton.addEventListener('click', skipQuestion);

  updateCurrentScore();
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  localStorage.setItem('quizData', JSON.stringify(quizData));
  initQuestionPage();
};

const getResult = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  localStorage.setItem('quizData', JSON.stringify(quizData));
  initResultPage();
};

const updateCurrentScore = () => {
  const currentScore = document.getElementById(CURRENT_SCORE_ID);
  currentScore.textContent = quizData.score;
};

const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  quizData.currentQuestionIndex = quizData.currentQuestionIndex;

  showCorrectAnswer(currentQuestion.correct);

  document.querySelector(`#${QUESTION_EXPLANATION_ID}`).style.display = 'block';

  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.disabled = false;
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

  document.querySelector(`#${QUESTION_EXPLANATION_ID}`).style.display = 'block';
};

const createProgress = (key, question) => {
  if (key == quizData.currentQuestionIndex) {
    return createProgressElement('current');
  }

  if (question.selected === null) {
    return createProgressElement();
  }

  if (question.selected === question.correct) {
    return createProgressElement('correct');
  }

  return createProgressElement('incorrect');
};
