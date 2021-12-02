'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [{
      firstName: 'test',
      lastName: 'admin',
      email: 'test@admin.com',
      hash: 'test',
      favoriteBooks: "",
      favoriteFlicks: "",
      favoriteApps: "",
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};