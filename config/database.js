//connect database
const Sequelize = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', 'varlei', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only


  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});
//test db
