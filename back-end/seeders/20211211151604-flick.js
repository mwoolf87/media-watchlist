'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Flicks', [{
      title: 'The Matrix',
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      runTime: '136 min',
      year: 1999,
      director: "Lana Wachowski, Lilly Wachowski",
      imdbRating: "8.7",
      UserId: 1,
      genre: "Action, Sci-Fi",
      language: "English",
      metaScore: "73",
      plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rated: "R",
      released: "31 Mar 1999",
      imdbID: "tt0133093",
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flicks', null, {});
  }
};



