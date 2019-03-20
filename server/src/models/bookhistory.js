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
    bookreturned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isexpired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    borrowedon: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    returnon: {
      type: DataTypes.DATE,
      allowNull: sequelize.NOW,
    },
  });
  return Bookhistory;
};
