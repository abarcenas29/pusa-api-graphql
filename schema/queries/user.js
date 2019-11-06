import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'
import {
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray
} from 'graphql-relay'
import data from './../data'

import TypeUser from './../types/user'

export const userConnection = connectionDefinitions({
  name: 'user',
  nodeType: TypeUser
})

const user = {
  type: TypeUser,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (s, a, c, i) => {
    return data.filter(i => i.uid === a.id)[0]
  }
}

export default {
  user,
  usersConnection: {
    type: userConnection.connectionType,
    args: connectionArgs,
    resolve: (_, args) => connectionFromPromisedArray(
      new Promise((resolve, reject) => {
        resolve(data)
      }),
      args
    )
  }
}
