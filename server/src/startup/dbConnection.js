const dbConnection = (sequelize) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('connection to the database established');
    })
    .catch(err => console.log('error connecting to the database', err));
};

export default dbConnection;
