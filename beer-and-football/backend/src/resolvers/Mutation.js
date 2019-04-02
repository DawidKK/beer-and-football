const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  },

  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] }
        }
      },
      info
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });
    return user;
  }
};

module.exports = mutations;
