import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initResultPage } from './pages/resultPage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const getStoredData = JSON.parse(localStorage.getItem('quizData'));

  if (getStoredData) {
    const storedQuestionIndex = getStoredData.currentQuestionIndex;
    const questionsLength = quizData.questions.length;

    if (storedQuestionIndex < questionsLength) {
      quizData.currentQuestionIndex = storedQuestionIndex;
      quizData.score = getStoredData.score;
      quizData.userName = getStoredData.userName;
      quizData.questions = getStoredData.questions;

      initQuestionPage();
    } else if (storedQuestionIndex >= questionsLength) {
      initResultPage();
    }
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
