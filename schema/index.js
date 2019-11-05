import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import userQueries from './queries/user'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQueries
  }
})

export default new GraphQLSchema({
  query: Query
})
