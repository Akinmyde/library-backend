module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Books.associate = (models) => {
    // associations can be defined here
  };
  return Books;
};
