const User = require('./User');
const Posts = require('./Posts');

Posts.belongsTo(User, {foreignKey: 'UserId'});
User.hasMany(Posts, {foreignKey: 'UserId'});

module.exports = {
  User,
  Posts,
};