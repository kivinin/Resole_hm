/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const ratingsData = [
      {
        user_id: 1,
        film_id: 1,
        rate: 1.5,
      },
      {
        user_id: 2,
        film_id: 2,
        rate: 5.5,
      },
      {
        user_id: 3,
        film_id: 3,
        rate: 9.5,
      },
    ];
    const ratings = ratingsData.map((rating) => ({
      ...rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Ratings', ratings);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ratings');
  },
};
