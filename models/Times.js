const Sequelize = require('sequelize')

const connection = require('./index')
const Model = Sequelize.Model


class Times extends Model {}

Times.init({
  uid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  shift_start: {
    type: Sequelize.DATE,
    allowNull: false
  },
  shift_end: {
    type: Sequelize.DATE,
    allowNull: false
  },
  time_in: {
    type: Sequelize.DATE,
    allowNull: false
  },
  time_out: {
    type: Sequelize.DATE,
    allowNull: true
  },
  time_in_loc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time_out_loc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  time_in_image: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  time_out_image: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  rate: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  late_time: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  work_time: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  gross_pay: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  created_by: {
    type: Sequelize.UUID,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'times'
})

module.exports = Times