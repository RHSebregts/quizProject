import {
  QUESTION_IMAGE_ID,
  QUESTION_EXPLANATION_ID,
  QUESTION_NUMBER_ID,
  ANSWERS_LIST_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElements = (question, number) => {
  const element = document.createElement('div');
  element.id = 'question-container';
  element.innerHTML = String.raw`
  <main id="main">
    <section class="quiz-media">
      <img id="${QUESTION_IMAGE_ID}" src=${question.imgLink} alt="Image linked to the question">
      <div id="${QUESTION_EXPLANATION_ID}">${question.explanation}</div>
    </section>
    <section class="quiz-content">
      <img class="question-logo" src="./public/assets/logo.svg">
      <div class="question-title">
        <span id="${QUESTION_NUMBER_ID}">${number}</span>
        <h1 class="question-text"> ${question.text}</h1>
      </div>
      <ul id="${ANSWERS_LIST_ID}"></ul>
    </section>
  </main>
	`;
  return element;
};
