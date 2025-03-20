export const quizData = {
  currentQuestionIndex: 0,
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
      text: 'What movie/show is the best adoptation of a videogame? (According to IMDB)',
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
      text: 'How many installements are there in the Fast and Furious franchise?',
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
      text: 'In which movie did Leonardo DiCaprio finally win his first Academy Award for Best Actor?',
      answers: {
              a: 'The Revenant',
              b: 'The Inception',
              c: 'What’s Eating Gilbert Grape',
              d: 'Once Upon a Time in Hollywood',
       },
      correct: 'a',
      selected: null,
    },
    
    {
      text: 'In the TV series Breaking Bad, what is the real name of the character known as "Heisenberg"?',
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
      text: "What is the name of the fictional metal used to make Captain America's shield in the Marvel Cinematic Universe?",
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
        },
      ],
    },
    {
      text: 'What is the main song from Cyberpunk: Edgerunners?',
      answers: {
        a: 'Billie Eilish - BIRDS OF A FEATHER',
        b: "The Cure - Boys Don't Cry",
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
          href: 'https://www.youtube.com/watch?v=KvMY1uzSC1E&ab_channel=Netflix',
        },
      ],
    },
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
    {
      text: 'What is the name of the coffee shop where the main characters of Friends often hang out?',
      answers: {
              a: 'Starbucks',
              b: 'Central Perk',
              c: 'Peets Coffee',
              d: 'Lavazza',
      },
      correct: 'b',
      selected: null,
      
    },

    {
      text: 'Which type of cancer has Walter White been treated for?',
      answers: {
              a: 'Colon Cancer',
              b: 'Leukemia',
              c: 'Brain Cancer',
              d: 'Lung Cancer',
      },
      correct: 'd',
      selected: null,
    },
 
 
  ],
};