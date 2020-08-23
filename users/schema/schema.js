const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType, // presense of a user
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
  { id: "23", firstName: "Bill", age: 20 },
  { id: "47", firstName: " Samantha", age: 21 },
];

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

//
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports =new GraphQLSchema({
  query:RootQuery
})