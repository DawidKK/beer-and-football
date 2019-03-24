const { forwardTo } = require('prisma-binding');

const Query = {
  games: forwardTo('db')
};

module.exports = Query;
