/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const favouritesData = [
      {
        user_id: 1,
        film_id: 1,
      },
      {
        user_id: 2,
        film_id: 2,
      },
      {
        user_id: 3,
        film_id: 3,
      },
    ];
    const favourites = favouritesData.map((favourite) => ({
      ...favourite,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Favourites', favourites);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favourites');
  },
};
