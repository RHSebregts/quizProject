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
export const createQuestionElement = (question, number, image, explanation) => {
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
	<main class = "main">
	  <section class = "quiz__media">
		 <img id="${QUESTION_IMAGE_ID}" src=${image} alt="Image Placeholder">
		 <div id="${QUESTION_EXPLANATION_ID}">${explanation}</div>
	  </section>
	  <section class ="quiz__content">
		 <div class = "question">
		 <div class = "question__block">
		<span id="${QUESTION_NUMBER_ID}">${number}</span>
		 <h2 class ="question__title"> ${question}</h2>
			<ul id="${ANSWERS_LIST_ID}"></ul>
		 </div>
		 </div>
	  </section>
	</main>
	`;

  return element;
};
