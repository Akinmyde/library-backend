module.exports = (sequelize, DataTypes) => {
  const bookhistory = sequelize.define('bookhistory', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    bookid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id',
      },
    },
    userid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
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
  bookhistory.associate = (models) => {
    // associations can be defined here
    bookhistory.hasMany(models.books);
    bookhistory.hasMany(models.users);
  };
  return bookhistory;
};
