'use strict';
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync("./data/teachers.json")).map(el=>{
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert("Teachers", data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

   down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Teachers", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
