module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverimageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    decription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  books.associate = (models) => {
    // associations can be defined here
  };
  return books;
};
