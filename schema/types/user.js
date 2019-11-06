import { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql'

import { globalIdField } from 'graphql-relay'

export default new GraphQLObjectType({
  name: 'User',
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
