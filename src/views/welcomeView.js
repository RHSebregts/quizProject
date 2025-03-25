import { START_QUIZ_BUTTON_ID, USER_NAME_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.className = 'welcome';
  element.innerHTML = String.raw`
        <img class="welcome-logo" src="./public/assets/logo.svg">
        <h1 class="welcome-title">The Ultimate Movies & TV Series Quiz</h1>

        <p class="welcome-description">Think you’re a true movie buff or a TV series expert? Test your knowledge with this fun and challenging quiz! From legendary 
        quotes to award-winning films, see if you can pick the right answers and prove you're the ultimate entertainment fan!</p>

        <p class="welcome-instruction"> Enter your name to begin</p> 
        <div class="welcome-form">
          <input type="text" class="welcome-input" id="${USER_NAME_ID}" placeholder="Your name">
  
          <button id="${START_QUIZ_BUTTON_ID}">Start the quiz</button>
        </div>  
  `;
  return element;
};
