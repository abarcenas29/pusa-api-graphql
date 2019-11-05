import { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { 
      type: new GraphQLNonNull(GraphQLID),
      resolve: obj => obj.uid
    },
    email: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    first_name: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    last_name: { 
      type: new GraphQLNonNull(GraphQLString)
    },
    middle_name: { 
      type: GraphQLString
    },
    password: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    type: {
      type: new GraphQLNonNull(
        new GraphQLEnumType({
          name: 'type',
          values: {
            employee: { value: 'employee'},
            admin: { value: 'admin'},
            owner: { value: 'owner'}
          }
        })
      )
    },
    address: {
      type: GraphQLString
    },
    contact_no: {
      type: GraphQLString
    },
    created_by: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
})
