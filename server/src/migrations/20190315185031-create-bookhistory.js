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
    isborrowed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    borrowedon: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    isreturned: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    returnon: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    isexpired: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    expireson: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
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
