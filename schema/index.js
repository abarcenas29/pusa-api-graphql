import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import userQuery from './queries/user'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: userQuery
  }
})

export default new GraphQLSchema({
  query: Query
})
