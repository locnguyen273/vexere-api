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
      "tickets",
      [
        {
          trip_id: 2,
          user_id: 1,
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },
        {
          trip_id: 1,
          user_id: 2,
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },        
        {
          trip_id: 3,
          user_id: 1,
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
     */
    await queryInterface.bulkDelete('tickets', null, {});
  },
};
