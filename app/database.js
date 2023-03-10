const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
      }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
