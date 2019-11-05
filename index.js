import express from 'express'
import graphQLHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'

import Schema from './schema'

// // Model
// const EmployeeModel = require('./models/Employees')
// const StoreModel = require('./models/Stores')
// const TimeModel = require('./models/Times')
// const UserModel = require('./models/Users')

const port = process.env.PORT || 5000
const app = express()

// const modelConfig = {}

// // Relations
// UserModel.hasMany(EmployeeModel)
// UserModel.hasOne(StoreModel)
// EmployeeModel.belongsTo(UserModel)
// EmployeeModel.hasMany(TimeModel)
// StoreModel.belongsTo(UserModel)
// EmployeeModel.belongsTo(StoreModel)
// TimeModel.belongsTo(EmployeeModel)


// UserModel
//   .sync(modelConfig)
//   .then(() => {
//     UserModel
//       .findOrCreate({
//         where: {
//           email: 'admin@mail.com'
//         },
//         defaults: {
//           address: '123 address st.',
//           created_by: '0000',
//           email: 'admin@mail.com',
//           first_name: 'Admin',
//           last_name: 'User',
//           password: "1tp@ssw0rd",
//           contact_no: '000-000-0000',
//           type: 'admin'
//         }
//       })
//   })
// TimeModel
//   .sync(modelConfig)
// EmployeeModel
//   .sync(modelConfig)
// StoreModel
//   .sync(modelConfig)


app.use(cors({
  origin: '*'
}))
app.use('/graphql', graphQLHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true
}))

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
