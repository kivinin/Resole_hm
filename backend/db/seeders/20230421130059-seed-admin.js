"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const adminsData = [
      {
        email: "vlad@gmail.com",
        password: await bcrypt.hash("123", 10),
        name: "Влад",
      },
      {
        email: "oleg@gmail.com",
        password: await bcrypt.hash("123", 10),
        name: "Олег",
      },
    ];
    const admins = adminsData.map((admin) => ({
      ...admin,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Admins", admins);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins");
  },
};
