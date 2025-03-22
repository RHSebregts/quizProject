import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initResultPage } from './pages/resultPage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const savedIndex = localStorage.getItem('currentIndex');
  const questionsLength = quizData.questions.length;

  if (!savedIndex) {
    initWelcomePage();
  } else if (savedIndex < questionsLength) {
    quizData.currentQuestionIndex = parseInt(savedIndex);
    quizData.score = parseInt(localStorage.getItem('currentScore'));

    initQuestionPage();
  } else if (savedIndex >= questionsLength) {
    initResultPage();
  }
};

window.addEventListener('load', loadApp);
