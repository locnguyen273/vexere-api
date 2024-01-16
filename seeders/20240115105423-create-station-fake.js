"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Bến xe Miền Tây",
          address: "395 Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "HCM",
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },
        {
          name: "Bến xe Đà Nẵng",
          address: "Tôn Đức Thắng, Hòa Minh, Liên Chiểu, Đà Nẵng",
          province: "DN",
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  },
};
