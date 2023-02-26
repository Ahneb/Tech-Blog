const User = require('./User');
const Posts = require('./Posts');

Posts.belongsTo(User);
User.hasMany(Posts);

module.exports = {
  User,
  Posts,
};