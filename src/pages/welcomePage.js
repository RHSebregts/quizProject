import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
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

  quizData.currentQuestionIndex = 0;
  localStorage.clear();
};

const startQuiz = () => {
  const userName = document.querySelector('#user-name');
  localStorage.setItem('UserName', userName.value);
  const userNameRequired = () => {
    userName.placeholder = 'This field is required';
    userName.classList.add('empty-field'); // frontend needs to add this class and style it accordingly
  };
  userName.value.length === 0 ? userNameRequired() : initQuestionPage();
};
