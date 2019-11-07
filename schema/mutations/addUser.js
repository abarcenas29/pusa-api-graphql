import { GraphQLNonNull, GraphQLString } from 'graphql'
import { 
  offsetToCursor,
  mutationWithClientMutationId,
  connectionArgs,
  connectionFromArray
} from 'graphql-relay'

import {userConnection, user} from './../types/user'

import data from './../data'
import { users } from './../types/user'
import { store } from './../index'

const addUser = mutationWithClientMutationId({
  name: 'addUser',
  inputFields: {
    email: { 
      type: new GraphQLNonNull(GraphQLString)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    userEdge: {
      type: userConnection.edgeType,
      resolve: obj => ({
        node: obj[obj.length - 1],
        cursor: offsetToCursor(obj.length - 1)
      })
    },
    store: {
      type: users,
      resolve: () => store
    }
  },
  mutateAndGetPayload: (args) => new Promise((resolve, reject) => {
    data.push({uid: `${data.length + 1}`, ...args})
    resolve(data)
  })
})

const addUserDisplayList = mutationWithClientMutationId({
  name: 'addUserDisplayList',
  inputFields: {
    email: { 
      type: new GraphQLNonNull(GraphQLString)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    userConnection: {
      type: userConnection.connectionType,
      resolve: obj => connectionFromArray(
        obj,
        connectionArgs
      )
    }
  },
  mutateAndGetPayload: (args) => new Promise((resolve, reject) => {
    data.push({uid: `${data.length + 1}`, ...args})
    resolve(data)
  })
})

export default {
  addUser,
  addUserDisplayList
}
