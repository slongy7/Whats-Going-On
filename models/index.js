const User = require('./users');
const Business = require('./business');
const Post = require('./post');

// User.hasMany(Post, {
//     foreignKey: 'user_id',
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });

Business.hasMany(Post, {
    foreignKey: 'bus_id',
});

Post.belongsTo(Business, {
    foreignKey: 'bus_id',
});




module.exports = { User, Business, Post };