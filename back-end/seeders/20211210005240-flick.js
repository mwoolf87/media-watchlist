'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Flicks', [{
      title: 'Croupier',
      poster: "../images/croupier.jpeg",
      runTime: '1h 34m',
      year: 1998,
      director: "Mike Hodges",
      rating: "NR",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flicks', null, {});
  }
};
