import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  USER_NAME_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.querySelector(`#${USER_INTERFACE_ID}`);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  resetQuizData();

  document
    .querySelector(`#${START_QUIZ_BUTTON_ID}`)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  const userName = document.querySelector(`#${USER_NAME_ID}`);
  quizData.userName = userName.value;

  if (userName.value.length === 0) {
    userNameRequired(userName);
  } else {
    localStorage.setItem('quizData', JSON.stringify(quizData));
    initQuestionPage();
  }
};

const userNameRequired = (userName) => {
  userName.placeholder = 'This field is required';
  userName.classList.add('empty-field');
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
