module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [{
    id: '7139d3af-b8b4-44f6-a49f-9305791700f4',
    title: 'Communication Skills',
    author: 'Anayo Olero',
    fileurl: 'fileurl/url/url',
    coverimageurl: 'fileurl/url/url',
    description: 'A powerful book on communication skills',
  },
  {
    id: 'fa3def47-153a-40bd-8181-a1c787e083d6',
    title: 'PIP',
    author: 'Ameachi Chuks',
    fileurl: 'fileurl/url/url/url',
    coverimageurl: 'fileurl/url/url/url',
    description: 'A powerful book on PIP',
  },
  ]),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
