/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const filmsData = [
      {
        title: 'Самый лучший фильм (нет)',
        description: 'Думал, что отдохну, но нет, опять страдаю',
        poster:
          'https://avatars.dzeninfra.ru/get-zen_doc/1708007/pub_61cc30253dab32605d0d2e87_61cc31078dff4e73a9986494/scale_1200',
      },
      {
        title: 'Всраватар',
        description: 'В моей деревне все такие',
        poster: 'https://tortikov.com/wp-content/uploads/2017/12/3-92-300x300.jpg',
      },
      {
        title: 'Котэ под наркотэ',
        description: 'Зря оставил мяту на видном месте',
        poster:
          'data:image/jpeg;base64,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',
      },
      {
        title: 'Чушь и точка',
        description: 'А вот это уже интересненько, смотрел дважды',
        poster:
          'https://igroray.ru/upload/iblock/db8/lizun_slime_ninja_2_v_1_zhyeltyy_i_krasnyy.jpg',
      },
    ];
    const films = filmsData.map((film) => ({
      ...film,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Films', films);
  },

  async down(queryInterface) {
    await queryInterface.bulkInsert('Films');
  },
};
