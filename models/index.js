const User = require('./users');
const Business = require('./business');
const Post = require('./post');

// User.hasMany(Post, {
//     foreignKey: 'user_id',
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });

module.exports = { User, Business, Post };