import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import userQueries from './queries/user'
import userMutations from './mutations/addUser'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQueries
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutations
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
