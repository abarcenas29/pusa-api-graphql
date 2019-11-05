const Sequelize = require('sequelize')

const Employees = require('./Employees')
const Stores = require('./Stores')

const connection = require('./index')
const Model = Sequelize.Model

class Users extends Model {}
Users.init({
  uid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middle_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: Sequelize.ENUM('employee', 'admin', 'owner'),
  profile_pic: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contact_no: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_by: {
    type: Sequelize.UUID,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'users'
})

module.exports = Users
