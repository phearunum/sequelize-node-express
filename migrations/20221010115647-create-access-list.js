'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AccessLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      acce_name: {
        type: Sequelize.STRING(200)
      },
      acce_url: {
        type: Sequelize.STRING(100)
      },
      acce_isMenu: {
        type: Sequelize.INTEGER
      },
      acce_subof: {
        type: Sequelize.INTEGER
      },
      acce_type: {
        type: Sequelize.STRING(50)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AccessLists');
  }
};