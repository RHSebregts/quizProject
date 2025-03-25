import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  USER_NAME_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  resetQuizData();

  const userName = document.querySelector(`#${USER_NAME_ID}`);
  quizData.userName = userName.value;

  const userNameRequired = () => {
    userName.placeholder = 'This field is required';
    userName.classList.add('empty-field');
  };

  if (userName.value.length === 0) {
    userNameRequired();
  } else {
    localStorage.setItem('quizData', JSON.stringify(quizData));
    initQuestionPage();
  }
};

const resetQuizData = () => {
  quizData.currentQuestionIndex = 0;
  quizData.score = 0;
  quizData.userName = '';

  quizData.questions.forEach((element) => {
    element.selected = null;
    element.skipped = false;
  });

  localStorage.clear();
};
