const User = require('./user');
const Posts = require('./posts');

Posts.belongsTo(User, {foreignKey: 'UserId'});
User.hasMany(Posts, {foreignKey: 'UserId'});

module.exports = {
  User,
  Posts,
};