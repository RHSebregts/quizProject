import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = parseInt(
    localStorage.getItem('currentIndex')
  );

  initWelcomePage();
};

window.addEventListener('load', loadApp);
