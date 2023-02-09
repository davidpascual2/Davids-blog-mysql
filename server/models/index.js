const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' // if user is deleted, all posts are deleted
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})






module.exports = { Post, User }