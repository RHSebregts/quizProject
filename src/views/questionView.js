import {
  QUESTION_IMAGE_ID,
  QUESTION_EXPLANATION_ID,
  QUESTION_NUMBER_ID,
  ANSWERS_LIST_ID,
  PROGRESS_BAR_ID,
  RESTART_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  CURRENT_SCORE_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <main>
    <section class = "quiz__media">
      <img src="${QUESTION_IMAGE_ID}" alt="Image Placeholder">
      <div id="${QUESTION_EXPLANATION_ID}"></div>
    </section>
    <section class ="quiz__content">
      <div id="${QUESTION_NUMBER_ID}"></div>
      <div class = "question">
        <h2 class ="question__title">${question}</h2>
        <ul id="${ANSWERS_LIST_ID}"></ul>
      </div>
    </section>
  </main>
  `;

  return element;
};
