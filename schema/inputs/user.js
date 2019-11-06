import { 
  GraphQLInputObjectType, 
  GraphQLString, 
  GraphQLNonNull 
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'inputUser',
  fields: {
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
