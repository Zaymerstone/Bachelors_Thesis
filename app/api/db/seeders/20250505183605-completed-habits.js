"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert("CompletedHabits", [
      // User 1
      { userId: 1, habitId: 1, createdAt: now, updatedAt: now }, // Push-ups
      { userId: 1, habitId: 2, createdAt: now, updatedAt: now }, // Drink water

      // User 2
      { userId: 2, habitId: 3, createdAt: now, updatedAt: now }, // Running
      { userId: 2, habitId: 4, createdAt: now, updatedAt: now }, // Take pills

      // User 3
      { userId: 3, habitId: 5, createdAt: now, updatedAt: now }, // Meditation

      // User 4
      { userId: 4, habitId: 6, createdAt: now, updatedAt: now }, // Reading

      // User 5
      { userId: 5, habitId: 7, createdAt: now, updatedAt: now }, // Squats

      // User 6
      { userId: 6, habitId: 8, createdAt: now, updatedAt: now }, // Yoga

      // User 7
      { userId: 7, habitId: 9, createdAt: now, updatedAt: now }, // Plank
      { userId: 7, habitId: 10, createdAt: now, updatedAt: now }, // Ice bath

      // User 8
      { userId: 8, habitId: 11, createdAt: now, updatedAt: now }, // Cold Shower

      // User 9
      { userId: 9, habitId: 12, createdAt: now, updatedAt: now }, // Stretching
      { userId: 9, habitId: 13, createdAt: now, updatedAt: now }, // Swimming

      // User 10
      { userId: 10, habitId: 14, createdAt: now, updatedAt: now }, // Journaling
      { userId: 10, habitId: 15, createdAt: now, updatedAt: now }, // Cross-Fit

      // User 11
      { userId: 11, habitId: 16, createdAt: now, updatedAt: now }, // Stretching
      { userId: 11, habitId: 17, createdAt: now, updatedAt: now }, // Cycling

      // User 12
      { userId: 12, habitId: 18, createdAt: now, updatedAt: now }, // Meditation
      { userId: 12, habitId: 19, createdAt: now, updatedAt: now }, // Cold shower

      // User 13
      { userId: 13, habitId: 20, createdAt: now, updatedAt: now }, // Yoga
      { userId: 13, habitId: 21, createdAt: now, updatedAt: now }, // Coding practice

      // User 14
      { userId: 14, habitId: 22, createdAt: now, updatedAt: now }, // Reading
      { userId: 14, habitId: 23, createdAt: now, updatedAt: now }, // Evening walk

      // User 15
      { userId: 15, habitId: 24, createdAt: now, updatedAt: now }, // Water intake tracking
      { userId: 15, habitId: 25, createdAt: now, updatedAt: now }, // Pull-ups
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompletedHabits", null, {});
  },
};
