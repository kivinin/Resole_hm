'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const productData = [
      {
        product_name: "Щетка",
        product_price: "100",
        product_description: "Щетка для поднятия ворса замщи",
        product_image: "https://sidex.ru/images_offers/1914/1914121/shetka_dlya_obyvi_1.jpg"
      },
      {
        product_name: "Щетка для полировки",
        product_price: "100",
        product_description: "Полиоровочная щетка с жестким ворсом",
        product_image: "https://ir.ozone.ru/s3/multimedia-m/c700/6093341578.jpg"
      },
    ];
    const products = productData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Products", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products");
  },
};
