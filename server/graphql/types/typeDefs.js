const typeDefs = `#graphql
  type User {
    id:ID
    name: String
    image: String
  }

  type Query {
    hello: String
    getAllUsers: [User]
    getUserById(id: ID):User
  }
`;

export default typeDefs;
