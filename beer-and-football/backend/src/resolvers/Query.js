const { forwardTo } = require('prisma-binding');

const Query = {
  games: forwardTo('db'),
  game: forwardTo('db')
};

module.exports = Query;
