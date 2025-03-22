import { START_QUIZ_BUTTON_ID, USER_NAME_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.className = 'welcome';
  element.innerHTML = String.raw`
        <!-- <img src=""> this is here for a possible icon -->
        <h1 class = "welcome__title">Ultimate Movies & TV Series Quiz</h1>

        <p class= "welcome__description">Think you’re a true movie buff or a TV series expert? Test your knowledge with this fun and challenging quiz! From legendary 
        quotes to award-winning films, see if you can pick the right answers and prove you're the ultimate entertainment fan!</p>

        <p class="welcome__instruction"> Enter your name and age to begin</p> 
        <div class="welcome__form">
          <input type="text" class="welcome__input" id="${USER_NAME_ID}" placeholder="Your name">
  
          <!--
          <div class="welcome__date">
            <input type="number" class="welcome__input welcome__input--small" id="day-of-birth" min="1" max="31" placeholder="DD">
            <input type="number" class="welcome__input welcome__input--small" id="month-of-birth" min="1" max="12" placeholder="MM">
            <input type="number" class="welcome__input welcome__input--small" id="year-of-birth" min="1900" placeholder="YYYY">
          </div>
          -->

          <button id="${START_QUIZ_BUTTON_ID}">Start the quiz</button>
        </div>  


        <!-- <p id="age-restriction-p">
        Uh-oh, you’re still in the ‘no R-rated movies’ club! But don’t worry, you’ll be a movie buff in no 
        time. Come back when you can stay up past 9 PM without getting caught!
        </p> this can be used when the age restriction is not met (can be easily implemented later) -->
  `;
  return element;
};
