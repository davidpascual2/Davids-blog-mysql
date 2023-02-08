const { Post } = require('../models'); 

module.exports = {
//operations can be directly written in routes but separating them is better
    addPost(req, res) {
        res.json('from controller');
    }
}