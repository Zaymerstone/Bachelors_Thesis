"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Helper to determine mastery level based on max_streak
    function getMasteryId(maxStreak) {
      if (maxStreak >= 168) return 8; // Legend
      if (maxStreak >= 119) return 7; // Grandmaster
      if (maxStreak >= 84) return 6; // Master
      if (maxStreak >= 56) return 5; // Diamond
      if (maxStreak >= 35) return 4; // Platinum
      if (maxStreak >= 21) return 3; // Gold
      if (maxStreak >= 14) return 2; // Silver
      if (maxStreak >= 7) return 1; // Bronze
      return null; // No mastery
    }

    await queryInterface.bulkInsert("UserAchievements", [
      {
        userId: 1,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(10), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 1,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 1,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(5), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 1,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(27), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 1,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(36), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 1,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(36), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(15), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(70), // MasteryId 5 (Diamond)
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(8), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(40), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(34), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 2,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(15), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(15), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(70), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(20), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 3,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(33), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(2), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(12), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(65), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(90), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 4,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(0), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(0), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(1), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(89), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(5), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 5,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(1), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(55), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(100), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(8), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(8), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(22), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 6,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(43), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(5), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(3), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(3), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(0), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 7,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(100), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(1), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(112), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(66), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(5), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(2), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 8,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(22), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(6), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(66), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(23), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 9,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(55), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(0), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(66), // Master
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(5), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(2), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 10,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(8), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(0), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(9), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(6), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 11,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(67), // Grandmaster
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(1), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(99), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(114), // Grandmaster
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(14), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 12,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(0), // null
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(1), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(112), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(66), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(5), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(2), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 13,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(22), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(5), // Silver
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(25), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(7), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(0), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(0), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 14,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(0), // No mastery
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 1,
        habitId: null,
        masteryId: getMasteryId(2), // Bronze
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 2,
        habitId: null,
        masteryId: getMasteryId(66), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 3,
        habitId: null,
        masteryId: getMasteryId(66), // Diamond
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 4,
        habitId: null,
        masteryId: getMasteryId(5), // Platinum
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 5,
        habitId: null,
        masteryId: getMasteryId(22), // Gold
        createdAt: now,
        updatedAt: now,
      },
      {
        userId: 15,
        globalHabitId: 6,
        habitId: null,
        masteryId: getMasteryId(22), // Gold
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserAchievements", { userId: 1 }, {});
  },
};
