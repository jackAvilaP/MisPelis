import User from '../../models/User.js'
const resolvers = {
  Query: {
    hello: () => ` Hello world jack`,
    getAllUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUserById: async (_, args) => {
      const { id } = args;
      const user = await User.findById(id);
      return user;
    },
  },
};

export default resolvers;
