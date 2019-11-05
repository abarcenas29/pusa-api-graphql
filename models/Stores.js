const Sequelize = require('sequelize')
const UsersModel = require('./Users.js')
const EmployeeModel = require('./Employees')

const connection = require('./index')
const Model = Sequelize.Model

class Stores extends Model {}

Stores.init({
  uid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tel: Sequelize.STRING,
  logo: Sequelize.BLOB,
  created_by: Sequelize.UUID
}, {
  sequelize: connection,
  modelName: 'stores'
})

module.exports = Stores