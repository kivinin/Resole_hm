"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const clientsData = [
      {
        name: "Влад",
        number: "+79650570535",
        adress: "Герцена 12",
      },
      {
        name: "Аня",
        number: "+79650367535",
        adress: "Центральная 35",
      },
    ];
    const clients = clientsData.map((client) => ({
      ...client,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Clients", clients);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Clients");
  },
};
