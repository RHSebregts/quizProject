import {
  PROGRESS_BAR_ID,
  SKIP_QUESTION_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  CURRENT_SCORE_ID,
  RESTART_BUTTON_ID,
} from '../constants.js';

export const createNavigation = (score) => {
  const nav = document.createElement('nav');
  nav.classList.add('quiz-nav');
  nav.innerHTML = `
		  <ul id="${PROGRESS_BAR_ID}"></ul>
	 
      <div class="audio-control"></div>

		  <div class="quiz-controls">
		  <button id="${RESTART_BUTTON_ID}">Restart the quiz</button>
        <button id="${SKIP_QUESTION_BUTTON_ID}">Skip Question</button>
        <button id="${NEXT_QUESTION_BUTTON_ID}" disabled>Next Question</button>
		  
	 
        <div class="quiz-score">
          <p>Score: <span id="${CURRENT_SCORE_ID}">${score}</span></p>
        </div>
      </div>
		`;

  return nav;
};
