module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bookhistories', {
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
        model: 'books',
        key: 'id',
      },
    },
    userid: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('bookhistories'),
};
