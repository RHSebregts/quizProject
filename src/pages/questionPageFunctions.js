import {
  QUESTION_EXPLANATION_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  CURRENT_SCORE_ID,
} from '../constants.js';

import { quizData } from '../data.js';
import { createProgressElement } from '../views/progressView.js';
import { initQuestionPage } from '../pages/questionPage.js';
import { initResultPage } from '../pages/resultPage.js';
import { SoundManager } from './soundManager.js';

const soundManager = new SoundManager();

export const createProgress = (key, question) => {
  if (key == quizData.currentQuestionIndex) {
    return createProgressElement('current');
  }

  if (question.selected === null || question.selected === 'skipped') {
    return createProgressElement();
  }

  if (question.selected === question.correct) {
    return createProgressElement('correct');
  }

  return createProgressElement('incorrect');
};

export const checkAudio = (audioStatus = localStorage.getItem('audio')) => {
  const audioButton = document.querySelector('.audio-control');

  if (audioStatus === 'true') {
    soundManager.mute = true;
    audioButton.classList.add('muted');
  } else {
    soundManager.mute = false;
    audioButton.classList.remove('muted');
  }
};

export const toggleMute = () => {
  if (soundManager.mute) {
    localStorage.setItem('audio', 'false');
    checkAudio('false');
  } else {
    localStorage.setItem('audio', 'true');
    checkAudio('true');
  }
};

export const antiCheat = () => {
  const currentQuestion = getLocalData().questions[
    quizData.currentQuestionIndex
  ];

  if (currentQuestion.skipped === true) {
    skipQuestion();
  }

  if (currentQuestion.selected !== null) {
    checkAnswer(null, currentQuestion, soundManager);
    confetti.reset();
    document
      .querySelector(`li[data-key=${currentQuestion.selected}]`)
      .classList.add('selected');
  }
};

const setLocalData = () => {
  localStorage.setItem('quizData', JSON.stringify(quizData));
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem('quizData'));
};

const updateScore = () => {
  quizData.score += 10;
  document.querySelector(`#${CURRENT_SCORE_ID}`).textContent = quizData.score;
};

export const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  setLocalData();
  initQuestionPage();
};

export const getResult = () => {
  quizData.currentQuestionIndex++;
  setLocalData();
  initResultPage();
};

export const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  quizData.questions[quizData.currentQuestionIndex].skipped = true;
  quizData.questions[quizData.currentQuestionIndex].selected = 'skipped';
  setLocalData();

  showCorrectAnswer(currentQuestion.correct);

  document
    .querySelector(`li[data-key=${currentQuestion.correct}]`)
    .classList.add('selected');
  document.querySelector(`#${QUESTION_EXPLANATION_ID}`).style.display = 'block';
  document.querySelector(`#${NEXT_QUESTION_BUTTON_ID}`).disabled = false;
  document.querySelector(`#${SKIP_QUESTION_BUTTON_ID}`).disabled = true;
};

export const answerClicked = (event) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  if (currentQuestion.selected == null) {
    checkAnswer(event, currentQuestion, soundManager);
  }
};

const selectAnswer = (event, currentQuestion) => {
  const locallySavedAnswer = getLocalData().questions[
    quizData.currentQuestionIndex
  ].selected;

  if (locallySavedAnswer !== null) {
    document.querySelector(`#${NEXT_QUESTION_BUTTON_ID}`).disabled = false;
    return locallySavedAnswer;
  }

  const answerElement = event.target;
  const answerKey = event.target.dataset.key;

  // Only proceed if the answer hasn't been selected yet, and the target is an <LI> element
  if (currentQuestion.selected || answerElement.tagName != 'LI') return;

  currentQuestion.selected = answerKey;
  answerElement.classList.add('selected');

  document.querySelector(`#${NEXT_QUESTION_BUTTON_ID}`).disabled = false;

  setLocalData();

  return answerKey;
};

const checkAnswer = (event, currentQuestion, soundManager) => {
  const selectedAnswer = selectAnswer(event, currentQuestion);
  if (!selectedAnswer) return; // if the answer selected -> function selectAnswer return undefined, so nothing will happen;

  if (selectedAnswer === currentQuestion.correct) {
    showCorrectAnswer(selectedAnswer);
    updateScore();
    soundManager.play('correct');
    confettiBomb();
  } else {
    showIncorrectAnswer(selectedAnswer);
    showCorrectAnswer(currentQuestion.correct);
    soundManager.play('incorrect');
  }

  document.querySelector(`#${SKIP_QUESTION_BUTTON_ID}`).disabled = true;
};

const showCorrectAnswer = (correctAnswer) => {
  document
    .querySelector(`li[data-key="${correctAnswer}"]`)
    .classList.add('correct');
};

const showIncorrectAnswer = (selectedAnswer) => {
  document
    .querySelector(`li[data-key="${selectedAnswer}"]`)
    .classList.add('incorrect');

  document.querySelector(`#${QUESTION_EXPLANATION_ID}`).style.display = 'block';
};

const confettiBomb = () => {
  confetti({
    particleCount: 200,
    startVelocity: 30,
    spread: 360,
  });
};
