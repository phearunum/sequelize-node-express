'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      app_name: {
        type: Sequelize.STRING(200)
      },
      app_ministry: {
        type: Sequelize.STRING(200)
      },
      app_desc: {
        type: Sequelize.STRING
      },
      app_startOn: {
        type: Sequelize.STRING(20)
      },
      app_closeON: {
        type: Sequelize.STRING(20)
      },
      app_status: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Applications');
  }
};