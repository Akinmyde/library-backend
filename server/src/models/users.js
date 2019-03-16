module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
