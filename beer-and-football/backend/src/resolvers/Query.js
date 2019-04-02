const { forwardTo } = require('prisma-binding');

const Query = {
  games: forwardTo('db'),
  game: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if user ID exists (added in middleware -> index.js)
    if (!ctx.request.userId) {
      return null;
    }

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  }
};

module.exports = Query;
