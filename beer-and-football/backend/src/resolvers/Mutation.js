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
  }
};

module.exports = mutations;
