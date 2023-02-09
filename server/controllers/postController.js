const { Post } = require('../models'); 


module.exports = {
//operations can be directly written in routes but separating them is better
    // addPost: function (req, res) {
    //     res.json('from controller')
    // },
    getPosts: async function( req, res) {
        try {
            const post = await Post.find() //posts variable?
            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }  
    },

    createPost: async function (req, res) {
        try {
            const dbPostdata = await Post.create(req.body);
            res.json(dbPostdata);
        } catch (err) {
            res.status(500).json(err)
        }
    },
}