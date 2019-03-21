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
      defaultValue: false,
    },
    returnon: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Bookhistory.associate = (models) => {
    // associations can be defined here

  };
  return Bookhistory;
};
