const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Аркадий',
        email: 'arka@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Аккакий',
        email: 'akaka@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Евпатий',
        email: 'evpa@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
