import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.id = 'welcome-page-container';
  element.innerHTML = String.raw`
        <!-- <img src=""> this is here for a possible icon -->
        <h1>Ultimate Movies & TV Series Quiz</h1>

        <p>Think you’re a true movie buff or a TV series expert? Test your knowledge with this fun and challenging quiz! From legendary 
        quotes to award-winning films, see if you can pick the right answers and prove you're the ultimate entertainment fan!</p>

        <p>Enter your name and age to begin</p>
        
        <input type="text" id="user-name" placeholder="Your name">

        <div id="age-container">
          <input type="number" id="day-of-birth" min="1" max="31" placeholder="Day">
          <input type="number" id="month-of-birth" min="1" max="12" placeholder="Month">
          <input type="number" id="year-of-birth" min="1900" placeholder="Year">
        </div>
        
        <button id="${START_QUIZ_BUTTON_ID}">Start the quiz</button>

        <!-- <p id="age-restriction-p">
        Uh-oh, you’re still in the ‘no R-rated movies’ club! But don’t worry, you’ll be a movie buff in no 
        time. Come back when you can stay up past 9 PM without getting caught!
        </p> this can be used when the age restriction is not met (can be easily implemented later) -->
  `;
  return element;
};
