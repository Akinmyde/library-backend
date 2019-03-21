module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Bookhistories', [
    {
      id: '34ca3f3a-239e-46c1-888e-2d597d482b7b',
      userid: '6517a6ea-662b-4eef-ab9f-20f89bd7099c',
      bookid: '7139d3af-b8b4-44f6-a49f-9305791700f4',
      returnon: Sequelize.fn('now'),
    },
    {
      id: '5bced466-6971-487f-af75-5a823e90a6ca',
      userid: '57c515a1-890d-412f-8ca1-0a5395123dca',
      bookid: '7139d3af-b8b4-44f6-a49f-9305791700f4',
      returnon: Sequelize.fn('now'),
    },
    {
      id: '4ebaa881-9fb9-4b31-8685-f84aa7d30e00',
      userid: '7142e4ff-366d-46cc-9384-40eadb3b2626',
      bookid: 'fa3def47-153a-40bd-8181-a1c787e083d6',
      returnon: Sequelize.fn('now'),
    },
    {
      id: 'd2e63440-c9c6-4a16-ab55-37844fab598e',
      userid: 'f5f4f498-6782-44d0-b1a7-347014fadeb8',
      bookid: 'fa3def47-153a-40bd-8181-a1c787e083d6',
      returnon: Sequelize.fn('now'),
    },
  ]),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
