const Sequelize = require('sequelize')
const dotenv = require('dotenv');
dotenv.config();

const connection = new Sequelize('pusa', 'pusa', '1tp@ssw0rd', {
  host: process.env.DB_NETWORK,
  dialect: 'mariadb',
  port: process.env.DB_PORT,
  dialectOptions: {
    timezone: 'Etc/GMT+8'
  }
})

module.exports = connection
