/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Who wrote score for Tenet?',
      answers: {
        a: 'Hans Zimmer',
        b: 'Ludwig Göransson',
        c: 'Trent Reznor',
        d: 'Lil Nas X',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://nl.wikipedia.org/wiki/Tenet_(soundtrack)',
        },
        {
          text: 'Listen on Spotify',
          href: 'https://open.spotify.com/playlist/5Td2FXZJ889fUJshGgcFkT?si=1fc22ea4a4884aff',
        },
      ],
    },
    {
      text: 'Who directed modern adaptations of Dune and Blade Runner?',
      answers: {
        a: 'Denis Villeneuve',
        b: 'Christopher Nolan',
        c: 'Timothée Chalamet',
        d: 'James Mangold',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Denis_Villeneuve',
        }
      ],
    },
    {
      text: 'What is the main song from Cyberpunk: Edgerunners?',
      answers: {
        a: 'Billie Eilish - BIRDS OF A FEATHER',
        b: 'The Cure - Boys Don\'t Cry,
        c: 'Eels - I Need Some Sleep',
        d: 'Hallie Coggins, Rosa Walton - Really Want to Stay in Your House',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Spotify',
          href: 'https://open.spotify.com/track/7mykoq6R3BArsSpNDjFQTm?si=c95eba373d1d4394',
        },
        {
          text: 'YouTube',
          href:
              'https://www.youtube.com/watch?v=KvMY1uzSC1E&ab_channel=Netflix',
        },
      ],
    }
    // Add more questions here
  ],
};
