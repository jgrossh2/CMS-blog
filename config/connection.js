//import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.JAWSDB_URL)
//create connection to our database, pass in your MYSQL information for username and password
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
});

module.exports = sequelize;