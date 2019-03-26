/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Bookhistory = sequelize.define('Bookhistory', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    bookid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    userid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    isborrowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    borrowedon: {
      type: DataTypes.DATE,

    },
    isreturned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    returnon: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    expireson: {
      type: DataTypes.DATE,
      allowNull: sequelize.NOW,
    },
  });
  Bookhistory.associate = (models) => {
    Bookhistory.belongsTo(models.Users, {
      foreignKey: 'userid',
    });
    Bookhistory.belongsTo(models.Books, {
      foreignKey: 'bookid',
    });
  };
  return Bookhistory;
};
