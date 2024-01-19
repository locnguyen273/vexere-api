"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2024-01-20 08:30:00",
          price: 200000,
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48",
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "2024-01-20 08:30:00",
          price: 300000,
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48",
        },
        {
          fromStation: 1,
          toStation: 4,
          startTime: "2024-01-20 08:30:00",
          price: 500000,
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48",
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
     */
    await queryInterface.bulkDelete('trips', null, {});
  },
};
