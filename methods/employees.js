const Users = require('./../models/Users')
const Employees = require('./../models/Employees')
const Times = require('./../models/Times')

module.exports = {
  createEmployees: args => {
    return Employees.create(args)
  },
  findEmployees: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    const { storeUid } = args
    return Users.findAndCountAll({
      ...args,
      where: {
        type: 'employee'
      },
      include: [
        { 
          model: Employees, 
          where: { storeUid },
          include: [ Times ]
        }
      ]
    })
  },
  updateEmployees: args => {
    const options = args.options || {}
    delete args.options
    return Employees
      .update(args, options)
  },
  deleteEmployees: args => {
    return Employees.destroy({
      where: args
    })
  }
}