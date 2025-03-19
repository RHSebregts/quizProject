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
      text: 'What was the first game in "Squid Game"?',
      answers: {
        a: 'Tug of War',
        b: 'Red Light, Green Light',
        c: 'Dodgeball',
        d: 'Ladder',
      },
      correct: 'b',
      selected: null,
      links: {
        text: 'All Squid Game Games In Order',
        href: 'https://screenrant.com/squid-game-in-order-origin-meaning/#:~:text=Ddakji%20is%20the%20first%20of%20all%20the%20Squid%20Games%20games%20in%20order.&text=Ddakji%20is%20arguably%20the%20most,1990s%20game%20known%20as%20Pogs.',
      },
    },
    {
      text: 'In "The Mandalorian", what is the real name of "Baby Yoda"?',
      answers: {
        a: 'Yaddle',
        b: 'Yoda',
        c: 'Grogu',
        d: 'Yodito',
      },
      correct: 'c',
      selected: null,
      links: {
        text: 'StarWars fandom',
        link: 'https://starwars.fandom.com/wiki/Din_Grogu',
      },
    },
    {
      text: 'In "Breaking Bad", what is the street name that Walter White uses in his drug trade?',
      answers: {
        a: 'Heisenberg',
        b: 'Walter White Jr.',
        c: 'Blue King',
        d: 'Jesse Pinkman',
      },
      correct: 'a',
      selected: null,
      links: {
        text: 'Wikipedia',
        href: 'https://en.wikipedia.org/wiki/Breaking_Bad#:~:text=Initially%20making%20only%20small%20batches,Heisenberg%22%20to%20mask%20his%20identity.',
      },
    },
  ],
};
