const Sequelize = require('sequelize')
const Users = require('./Users')

const connection = require('./index')
const Model = Sequelize.Model

class Employees extends Model {}

Employees.init({
  uid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  rate: Sequelize.FLOAT,
  shift_start: Sequelize.TIME,
  shift_end: Sequelize.TIME,
  created_by: Sequelize.UUID
}, {
  sequelize: connection,
  modelName: 'employees'
})

module.exports = Employees
