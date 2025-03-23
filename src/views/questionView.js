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
export const createQuestionElement = (question, number, image, explanation) => {
  const element = document.createElement('div');
  element.id = 'question-container';
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <main id="main">
    <section class="quiz__media">
      <img id="${QUESTION_IMAGE_ID}" src=${image} alt="Image linked to the question">
      <div id="${QUESTION_EXPLANATION_ID}">${explanation}</div>
    </section>
    <section class="quiz__content">
      <div class="question__title">
        <span id="${QUESTION_NUMBER_ID}">${number}</span>
        <h1 class="question__text"> ${question}</h1>
      </div>
      <ul id="${ANSWERS_LIST_ID}"></ul>
    </section>
  </main>
	`;
  return element;
};
