'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.
    const customerData = [
      { username: 'Batman', password: "Batman", createdAt: new Date(), updatedAt: new Date() },
      { username: 'Superman', password: "Superman", createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert('Customers', customerData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
