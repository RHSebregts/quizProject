import {
  ANSWERS_LIST_ID,
  PROGRESS_BAR_ID,
  RESTART_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';

import { quizData } from '../data.js';
import { createQuestionElements } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createNavigation } from '../views/navigationView.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import * as run from './questionPageFunctions.js';

export const initQuestionPage = () => {
  const userInterface = document.querySelector(`#${USER_INTERFACE_ID}`);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const currentNumberQuestion = quizData.currentQuestionIndex + 1;

  const questionElement = createQuestionElements(
    currentQuestion,
    currentNumberQuestion
  );
  userInterface.appendChild(questionElement);

  const answersListElement = document.querySelector(`#${ANSWERS_LIST_ID}`);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  answersListElement.addEventListener('click', run.answerClicked);

  const nav = createNavigation(quizData.score);
  document.querySelector('#question-container').appendChild(nav);

  const progressBar = document.querySelector(`#${PROGRESS_BAR_ID}`);
  const getStoredData = run.getLocalData();

  for (const [key, question] of Object.entries(
    getStoredData ? getStoredData.questions : quizData.questions
  )) {
    const progressElement = run.createProgress(key, question);
    progressBar.appendChild(progressElement);
  }

  const nextQuestionButton = document.querySelector(
    `#${NEXT_QUESTION_BUTTON_ID}`
  );

  if (currentNumberQuestion < quizData.questions.length) {
    nextQuestionButton.addEventListener('click', run.nextQuestion);
  } else {
    nextQuestionButton.textContent = 'Get Result';
    nextQuestionButton.addEventListener('click', run.getResult);
  }

  document
    .querySelector('.audio-control')
    .addEventListener('click', run.toggleMute);

  document
    .querySelector(`#${SKIP_QUESTION_BUTTON_ID}`)
    .addEventListener('click', run.skipQuestion);

  document
    .querySelector(`#${RESTART_BUTTON_ID}`)
    .addEventListener('click', initWelcomePage);

  run.checkAudio();
  run.antiCheat();
};
