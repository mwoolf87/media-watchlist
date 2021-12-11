'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flicks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      runTime: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      imdbRating: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      genre: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      metaScore: {
        type: Sequelize.STRING
      },
      plot: {
        type: Sequelize.STRING
      },
      rated: {
        type: Sequelize.STRING
      },
      released: {
        type: Sequelize.STRING
      },
      imdbID: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flicks');
  }
};