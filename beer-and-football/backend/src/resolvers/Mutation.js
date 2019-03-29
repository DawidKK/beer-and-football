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
  },

  updateGame(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;

    return ctx.db.mutation.updateGame(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },

  async deleteGame(parent, args, ctx, info) {
    const where = { id: args.id };
    // to bedzie potrzebne potem do sprawdzenia czu user ma gre
    const game = await ctx.db.query.game({ where }, `{id}`);

    return ctx.db.mutation.deleteGame({ where }, info);
  }
};

module.exports = mutations;
