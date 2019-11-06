import { GraphQLNonNull } from 'graphql'
import { 
  connectionDefinitions, 
  connectionFromPromisedArray, 
  connectionArgs
} from 'graphql-relay'

import TypeUser from './../types/user'
import InputUser from './../inputs/user'

import data from './../data'

export const userConnection = connectionDefinitions({
  name: 'userList',
  nodeType: TypeUser
})

const addUser = {
  type: userConnection.connectionType,
  args: {
    user: {
      type: InputUser
    },
    ...connectionArgs
  },
  resolve: (_, args) => connectionFromPromisedArray(
    new Promise((resolve, reject) => {
      console.log(args, 'args')
      data.push({uid: `${data.length + 1}`, ...args.user})
      resolve(data)
    }),
    args
  )
}

export default {
  addUser
}
