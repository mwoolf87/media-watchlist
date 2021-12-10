'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'test',
      lastName: 'admin',
      email: 'test@admin.com',
      hash: 'test',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
