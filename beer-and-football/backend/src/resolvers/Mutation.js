const mutations = {
  async createGame(parent, args, ctx, info) {
    const game = await ctx.db.mutation.createGame(
      {
        data: {
          ...args
        }
      },
      info
    );

    return game;
  },

  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args
        }
      },
      info
    );

    return user;
  }
};

module.exports = mutations;
