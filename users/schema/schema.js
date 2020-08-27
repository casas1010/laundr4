const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType, // presense of a user
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

const UserType = new GraphQLObjectType({
  // presense of a user
  name: "User", // describes the type that we are defining
  fields: {
    // describes the properties of the type
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

// testasd
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then((resp) => resp.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
