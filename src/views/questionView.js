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
  element.id = 'question-page-container';
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <main>
    <section id="${QUESTION_IMAGE_ID}">
      <img src="https://placehold.jp/30px/757575/ffffff/600x1000.jpg?text=Image%20Placeholder&css=%7B%7D" alt="Image Placeholder">
      <div id="${QUESTION_EXPLANATION_ID}"></div>
    </section>
    
    <section id="question-content">
      <div id="${QUESTION_NUMBER_ID}"></div>
      <div id="arrow-icon"><svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"/></svg></div>
      <div id="question-answer">
        <div id="question-text">${question}</div>
        <ul id="${ANSWERS_LIST_ID}"></ul>
      </div>
    </section>
  </main>

  <nav>
    
    <div id="${PROGRESS_BAR_ID}">Progress bar goes here</div>

    <div id="score-buttons-container">
      <button id="${RESTART_BUTTON_ID}">Restart the quiz</button>
      <button id="${SKIP_QUESTION_BUTTON_ID}">Skip Question</button>
      <button id="${NEXT_QUESTION_BUTTON_ID}" disabled>Next Question</button>

      <p>Score: <span id="${CURRENT_SCORE_ID}">0</span></p>
    </div>
  </nav>
  `;

  return element;
};
