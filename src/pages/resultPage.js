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
  const userInterface = document.querySelector(`#${USER_INTERFACE_ID}`);
  userInterface.innerHTML = '';

  const resultElement = createResultElement();
  userInterface.appendChild(resultElement);

  showResult();

  document
    .querySelector(`#${RESTART_BUTTON_ID}`)
    .addEventListener('click', initWelcomePage);
};

const showResult = () => {
  const resultParagraph = document.querySelector(`#${RESULT_PARAGRAPH_ID}`);
  const resultImage = document.querySelector(`#${RESULT_IMAGE_ID}`);
  const userName = quizData.userName;
  const score = quizData.score;
  const totalScore = quizData.questions.length * 10;

  if (score >= 0 && score <= 40) {
    resultParagraph.innerHTML = `Oops <b>${userName}!</b> You scored <b>${score}/${totalScore}</b>... Have you been watching documentaries only? No worries, grab some popcorn and start catching up!`;
    resultImage.src = './public/assets/result-images/oops.gif';
  }

  if (score >= 50 && score <= 90) {
    resultParagraph.innerHTML = `Not bad <b>${userName}!</b> You scored <b>${score}/${totalScore}!</b> Casual Viewer Alert! You know some things, but maybe it’s time for a weekend binge session to level up your entertainment knowledge!`;
    resultImage.src = './public/assets/result-images/notbad.gif';
  }

  if (score >= 100 && score <= 120) {
    resultParagraph.innerHTML = `You are a genius <b>${userName}!</b> You scored <b>${score}/${totalScore}!</b> Hollywood Hall of Fame! You crushed it! You’re the ultimate movie and TV expert. Someone get this person a red carpet and an acceptance speech!`;
    resultImage.src = './public/assets/result-images/genius.webp';
    confettiBomb();
  }

  document
    .querySelector(`#${RESTART_BUTTON_ID}`)
    .addEventListener('click', restartQuiz);
};

let interval;
const confettiBomb = () => {
  interval = setInterval(() => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  }, 1500);
};

const restartQuiz = () => {
  clearInterval(interval);
  initWelcomePage();
};
