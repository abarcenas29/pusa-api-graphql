import { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql'
import {
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  globalIdField
} from 'graphql-relay'

import data from './../data'

export const user = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { 
      type: new GraphQLNonNull(GraphQLID),
      resolve: o => o.uid
    },
    email: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    first_name: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    last_name: { 
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

export const userConnection = connectionDefinitions({
  name: 'userConnection',
  nodeType: user
})

export const users = new GraphQLObjectType({
  name: 'UsersType',
  fields: {
    id: globalIdField('users'),
    userConnection: {
      type: userConnection.connectionType,
      args: connectionArgs,
      resolve: (_,args) => connectionFromPromisedArray(
        new Promise((resolve, reject) => {
          resolve(data)
        }),
        args
      )
    }
  }
})

