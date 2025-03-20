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
      text: 'What is the best movie trilogy? (According to IMDB)',
      answers: {
        a: 'The Lord of the Rings',
        b: 'Star Wars (any of the 3)',
        c: 'The Matrix',
        d: 'The Godfather',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'The Lord of the Rings IMDB',
          href: 'https://www.imdb.com/list/ls005053232/',
        },
        {
          text: 'Star Wars IMDB',
          href: 'https://www.imdb.com/list/ls084684940/',
        },
        {
          text: 'The Matrix IMDB',
          href: 'https://www.imdb.com/list/ls041070228/',
        },
        {
          text: 'The Godfather IMDB',
          href: 'https://www.imdb.com/list/ls068557785/',
        },
      ],
    },
    {
      text:
        'What movie/show is the best adoptation of a videogame? (According to IMDB)',
      answers: {
        a: 'The Witcher',
        b: 'Super Mario Bros.',
        c: 'The Last of Us',
        d: 'Mortal Kombat',
      },
      correct: 'C',
      selected: null,
      links: [
        {
          text: 'The Witcher IMDB',
          href: 'https://www.imdb.com/title/tt5180504/',
        },
        {
          text: 'Mortal Kombat IMDB',
          href: 'https://www.imdb.com/title/tt0293429/',
        },
        {
          text: 'The Last of Us IMDB',
          href: 'https://www.imdb.com/title/tt3581920/',
        },
        {
          text: 'Super Mario Bros. IMDB',
          href: 'https://www.imdb.com/title/tt6718170/',
        },
      ],
    },
    {
      text:
        'How many installements are there in the Fast and Furious franchise?',
      answers: {
        a: '8',
        b: '9',
        c: '10',
        d: '11',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'IMDB',
          href: 'https://www.imdb.com/list/ls068935667/',
        },
      ],
    },
    {
      text:
        'In the TV series Breaking Bad, what is the real name of the character known as "Heisenberg"?',
      answers: {
        a: 'Jesse Pinkman',
        b: 'Walter White',
        c: 'Gustavo Fring',
        d: 'Hank Schrader',
      },
      correct: 'b',
      selected: null,
      explanation:
        'Walter White, played by Bryan Cranston, is the main character in Breaking Bad. He adopts the alias "Heisenberg" as he transforms from a high school chemistry teacher into a feared drug kingpin',
    },
    {
      text:
        "What is the name of the fictional metal used to make Captain America's shield in the Marvel Cinematic Universe?",
      answers: {
        a: 'Adamantium',
        b: 'Unobtainium',
        c: 'Kryptonite',
        d: 'Vibranium',
      },
      correct: 'd',
      selected: null,
      explanation:
        "Vibranium is a rare and powerful metal in the Marvel Cinematic Universe (MCU). Captain America's shield is made from it, and it originates from the fictional African nation of Wakanda, which plays a major role in Black Panther.",
    },
    {
      text: 'Which TV series is known for the famous line, "Winter is Coming"?',
      answers: {
        a: 'The Witcher',
        b: 'The Lord of the Rings: The Rings of Power',
        c: 'Game of Thrones',
        d: 'Vikings',
      },
      correct: 'c',
      selected: null,
      explanation:
        'Winter is Coming is one of the most iconic phrases from Game of Thrones. It is the motto of House Stark and serves as a warning about the harsh winters in Westeros, as well as the coming threats beyond the Wall.',
    },
  ],
};
