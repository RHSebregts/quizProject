import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const savedIndex = localStorage.getItem('currentIndex');

  if (savedIndex) {
    quizData.currentQuestionIndex = parseInt(savedIndex);
    quizData.score = parseInt(localStorage.getItem('currentScore'));

    initQuestionPage();
  } else {
    quizData.currentQuestionIndex = 0;
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
