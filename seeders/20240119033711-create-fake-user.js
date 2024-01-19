'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Lộc",
          email: "loc@gmail.com",
          password: "123123123",
          numberPhone: "0987654321",
          avatar: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          type: "ADMIN",
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },
        {
          name: "Lộc Nguyễn",
          email: "test@gmail.com",
          password: "123123123",
          numberPhone: "0987654321",
          avatar: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          type: "ADMIN",
          createdAt: "2024-01-15 03:58:48",
          updatedAt: "2024-01-15 03:58:48"
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
    * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
