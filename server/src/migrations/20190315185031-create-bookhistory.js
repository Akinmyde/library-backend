module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Bookhistories', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    bookid: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    userid: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    bookreturned: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isexpired: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    borrowedon: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    returnon: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),

  down: queryInterface => queryInterface.dropTable('Bookhistories'),
};
