import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'
import { offsetToCursor } from 'graphql-relay'
import data from './../data'

import { store } from './../index'
import { user, users, userConnection } from './../types/user'

const findUser = {
  type: userConnection.edgeType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (obj, args) => {
    const node = data.filter(i => i.uid === args.id)[0]
    const index = data.map(i => i.uid).indexOf(args.id)
    return {node, cursor: offsetToCursor(index)}
  }
}

const listUser = {
  type: users,
  resolve: () => store
}

export default {
  findUser,
  listUser
}
