"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const servicesData = [
      {
        service_name: "Доставка",
        price: "100",
        service_description: "Стоимость доставки указана в одну сторону",
        service_image:
          "https://sun9-27.userapi.com/JpUccU--L5rYdkGz1Fo0Aq1W-OEm4nSIBdp_dw/EKXm_Jr-PEQ.jpg",
      },
      {
        service_name: "Перекраска",
        price: "3000",
        service_description: "Перекраска обуви и изделий из кожи",
        service_image:
          "https://sun9-68.userapi.com/D-IxKDbu49TD6MBPol_Z0dnNQq_0lfH3S99Xqg/Zt5NMILNUyM.jpg",
      },
      {
        service_name: "Полировка",
        price: "600",
        service_description:
          "Полировка носков и задников кожаной обуви, для придания ей сильного блеска",
        service_image:
          "https://sun9-53.userapi.com/wDsYl_eDU88wmt9c-Fmn998BsqnKpD71yKZSMQ/CQYBceneK2U.jpg",
      },
      {
        service_name: "Водоотталкивающая пропитка",
        price: "200",
        service_description:
          "Обработка поверхности обуви водоотталкивающими средствами",
        service_image:
          "https://sun9-80.userapi.com/QnLilFla3LTTdVzC9K65TwitFEM8V5-zPtue2w/aWvBrgplEq0.jpg",
      },
      {
        service_name: "Точечная химчистка",
        price: "600",
        service_description: "Чистка конкретной детали или загрязнения",
        service_image:
          "https://sun9-70.userapi.com/CPc-ZkqlfGsgtV6KktwAk1iSNbiY9bzWgo6dBw/pILfM-UbmIc.jpg",
      },
      {
        service_name: "Отбеливание подошвы (рантов)",
        price: "600",
        service_description:
          "Отбеливание подошвы при помощи новейших средств",
        service_image:
          "https://sun9-23.userapi.com/qu_7K8s3s-lqM5rP6DZPnI7MjeCvVyXtAlT9Iw/3F8RxoDnwvw.jpg",
      },
      {
        service_name: "Дезодорант",
        price: "100",
        service_description:
          "Обработка внутренней части обуви антибактериальным средством",
        service_image:
          "https://sun9-67.userapi.com/Ae2KjmlD9ECwC-6e8AHvZS_bAhCv1EuIZi_MyQ/AKaGWmTgJbA.jpg",
      },
      {
        service_name: "Кожаные изделия (чистка, перекраска)",
        price: "По договорённости",
        service_description:
          "Чистка, покраска, полировка изделий из кожи (сумки, кошельки, ремни и др.)",
        service_image:
          "https://sun9-60.userapi.com/Qz_rFrndgPI3Y7HlTPIpcw4s3t4kp4HOlmNaUQ/0syBVu9I6yk.jpg",
      },
      {
        service_name: "Химчистка Высоких сапог",
        price: "2300",
        service_description: "Комплексная химчистка высоких сапог",
        service_image:
          "https://sun9-76.userapi.com/2rOQLIzJ0h4jaQDBvPxmB3vMIu2V2eXFvDFBfA/cvBgqB127qI.jpg",
      },
      {
        service_name: "Химчистка HIGH TOP",
        price: "1900",
        service_description:
          "Комплексная чистка обуви с высоким верхом (зимние ботинки)",
        service_image:
          "https://sun9-55.userapi.com/AHo-_XeuZsPeYBcg0zPMRFPgiNiwd6tQAsKxLA/Toe6W2TY_Tw.jpg",
      },
      {
        service_name: "Химчистка PREMIUM",
        price: "1800",
        service_description: "Комплексная чистка обуви премиальных брендов",
        service_image:
          "https://sun9-8.userapi.com/ckyHC9pTNrF2CJCKf4lS9_REUffj8Kt_fjJ4XQ/YU7kwyQy2Ow.jpg",
      },
      {
        service_name: "Химчистка STANDARD",
        price: "1400",
        service_description: "Комплексная чистка обуви с невысоким верхом",
        service_image:
          "https://sun9-60.userapi.com/0MDyWyDtM4GZTH04RdHfP_D7nWWZXuFZ_5QEeQ/X9SvDRGmdzc.jpg",
      },
    ];
    const services = servicesData.map((service) => ({
      ...service,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Services", services);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services");
  },
};
