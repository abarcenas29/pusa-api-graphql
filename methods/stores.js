const Stores = require('./../models/Stores')

module.exports = {
  createStores: args => {
    return Stores.create(args)
  },
  findStores: args => {
    if (args.limit) args.limit = parseInt(args.limit)
    if (args.offset) args.offset = parseInt(args.offset)

    return Stores.findAndCountAll(args)
  },
  updateStores: args => {
    const options = args.options || {}
    delete args.options
    return Stores
      .update(args, options)
  },
  deleteStores: args => {
    return Stores.destroy({
      where: args
    })
  }
}
