import {
  USER_INTERFACE_ID,
  RESTART_BUTTON_ID,
  RESULT_PARAGRAPH_ID,
  RESULT_IMAGE_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { createResultElement } from '../views/resultView.js';
import { initWelcomePage } from './welcomePage.js';

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement();
  userInterface.appendChild(resultElement);

  let userName = quizData.userName;
  if (userName === '') {
    const getStoredUsername = JSON.parse(localStorage.getItem('quizData'));
    userName = getStoredUsername.userName;
  }

  let score = quizData.score;
  if (score === 0) {
    const getStoredScore = JSON.parse(localStorage.getItem('quizData'));
    score = getStoredScore.score;
  }

  const resultParagraph = document.getElementById(RESULT_PARAGRAPH_ID);
  const resultImage = document.getElementById(RESULT_IMAGE_ID);
  const totalScore = quizData.questions.length * 10;

  if (score >= 0 && score <= 40) {
    resultParagraph.innerHTML = `Oops <b>${userName}!</b> You scored <b>${score}/${totalScore}</b>... Have you been watching documentaries only? No worries, grab some popcorn and start catching up!`;
    resultImage.src = './public/assets/result-images/oops.gif';
  } else if (score >= 50 && score <= 90) {
    resultParagraph.innerHTML = `Not bad <b>${userName}!</b> You scored <b>${score}/${totalScore}!</b> Casual Viewer Alert! You know some things, but maybe it’s time for a weekend binge session to level up your entertainment knowledge!`;
    resultImage.src = './public/assets/result-images/notbad.gif';
  } else if (score >= 100 && score <= 120) {
    resultParagraph.innerHTML = `You are a genius <b>${userName}!</b> You scored <b>${score}/${totalScore}!</b> Hollywood Hall of Fame! You crushed it! You’re the ultimate movie and TV expert. Someone get this person a red carpet and an acceptance speech!`;
    resultImage.src = './public/assets/result-images/genius.webp';
  }

  document.getElementById(RESTART_BUTTON_ID).addEventListener('click', () => {
    localStorage.clear();
    initWelcomePage();
  });
};
