const Sequelize = require('sequelize')
const dayjs = require('dayjs')

const Times = require('./../models/Times')
const Employees = require('./../models/Employees')
const Op = Sequelize.Op

module.exports = {
  createTimes: args => {
    const { time_in } = args
    return Times
      .findAll({
        where: {
          employeeUid: args.employeeUid,
          time_in: {
            [Op.gt]: dayjs(time_in).startOf('day').toISOString(),
          }
        }
      })
      .then(r => {
        if (r.length > 0) throw new Error(`Already logged in`)
        return Employees.findOne({where: { uid: args.employeeUid}})
      })
      .then(r => {
        const { uid, rate, shift_start, shift_end } = r
        if (!uid) throw new Error('No employee found')
        const [ sHour, sMin, sSec ] = shift_start.split(':')
        const [ eHour, eMin, eSec ] = shift_end.split(':')
        const value = {
          shift_start: dayjs()
            .hour(sHour)
            .minute(sMin)
            .second(sSec)
            .toISOString(),
          shift_end: dayjs()
            .hour(eHour)
            .minute(eMin)
            .second(eSec)
            .toISOString(),
          rate,
          ...args
        }
        return Times.create(value)
      })
      .catch(e => {
        return { error: e.message }
      })
  },
  findCurrentCheckIn: args => {
    return Times.findAll({
      where: {
        employeeUid: args.employeeUid,
        time_in: {
          [Op.gt]: args.time_in,
        }
      },
      limit: 1
    })
  },
  findTimes: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)
    if (args.time_in) {
      args.where = {
        ...args.where,
        time_in: {
          [Op.gt]: dayjs().startOf('month').toISOString()
        }
      }
    }

    return Times.findAndCountAll(args)
  },
  updateTimes: args => {
    const options = args.options || {}
    delete args.options
    return Times
      .findOne({
        where: {
          uid: options.where.uId
        }
      })
      .then(r => {
        if (r.time_out) throw new Error('Already time-out')
        const { time_out } = args
        const { shift_start, shift_end, time_in, rate } = r
        const late_in_time = dayjs(shift_start).diff(dayjs(time_in), 'minute')
        const late_out_time = dayjs(shift_end).diff(dayjs(time_out), 'minute')
        const shift_hour = dayjs(shift_end).diff(dayjs(shift_start), 'minute') / 60
        
        const late_time = Math.abs((late_in_time + late_out_time) / 60)
        const work_time = dayjs(time_out).diff(dayjs(time_in), 'minute') / 60
        const gross_pay = work_time * (rate / shift_hour)

        const newValue = {
          ...args,
          late_time,
          work_time,
          gross_pay
        }

        return Times.update(newValue, options)
      })
      .catch(e => ({error: e.message}))
  },
  deleteTimes: args => {
    return Times.destroy({
      where: args
    })
  }
}
