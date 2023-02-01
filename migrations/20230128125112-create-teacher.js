'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      idCard: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      pob: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob:{
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      education: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull:false
      },
      profilePicture: {
        type: Sequelize.TEXT,
        allowNull:false
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
    await queryInterface.dropTable('Teachers');
  }
};