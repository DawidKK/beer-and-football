const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mutations = {
  async createGame(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('Musisz być zalogowany ziom!');
    }

    const game = await ctx.db.mutation.createGame(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
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
  },
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`Nie znaleziono użtkownika z mailem: ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Niepoprawne hasło!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 5. Return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
  }
};

module.exports = mutations;
