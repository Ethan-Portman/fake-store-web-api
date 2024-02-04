'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    const plantData = [
      { name: 'Sunflower', price: 29.99, image: '/images/sunflower.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carnation', price: 29.99, image: '/images/carnation.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daffodil', price: 29.99, image: '/images/daffodil.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lily', price: 29.99, image: '/images/lily.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rose', price: 29.99, image: '/images/rose.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tulip', price: 29.99, image: '/images/tulip.png', createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Plants', plantData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed here.
    await queryInterface.bulkDelete('Plants', null, {});
  }
};

