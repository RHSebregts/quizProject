import {
  RESTART_BUTTON_ID,
  RESULT_PARAGRAPH_ID,
  RESULT_IMAGE_ID,
} from '../constants.js';

/**
 * Create the result page
 * @returns {Element}
 */
export const createResultElement = () => {
  const element = document.createElement('div');
  element.className = 'resultPage';
  element.innerHTML = String.raw`
        <!-- <img src=""> this is here for a possible icon -->
        <h1 class="welcome__title">And the Oscar Goes To... You?</h1>

        <p id="${RESULT_PARAGRAPH_ID}" class="welcome__description">Oops... Have you been watching documentaries only? No worries, grab some popcorn and start catching up!</p>

        <img id="${RESULT_IMAGE_ID}" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFyajd3cmR4aDZwNmJqNG5wZXQxNnNteG1oZHFndWxoMzFqZ2dtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qs1uMrvmHAKIUXxO2g/giphy.gif" alt="oops">

        <button id="${RESTART_BUTTON_ID}" class="restart__button">Restart the quiz</button>
  `;
  return element;
};
