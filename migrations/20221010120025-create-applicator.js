'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applicators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING(30)
      },
      lname: {
        type: Sequelize.STRING(30)
      },
      sex: {
        type: Sequelize.STRING(10)
      },
      national_id: {
        type: Sequelize.STRING(50)
      },
      dob: {
        type: Sequelize.STRING(20)
      },
      pob: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(200)
      },
      phone: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      edu_level: {
        type: Sequelize.INTEGER(50)
      },
      school: {
        type: Sequelize.STRING(100)
      },
      perstionl_status: {
        type: Sequelize.STRING(20)
      },
      photo: {
        type: Sequelize.STRING(250)
      },
      username: {
        type: Sequelize.STRING(30)
      },
      password: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applicators');
  }
};