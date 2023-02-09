// const router = require('express').Router();
const { User } = require('../models'); //needed?

//create new user
module.exports = {

    //create a user
    // async createUser({ body }, res) {
    //     const user = await User.create(body);

    //     if(!user) {
    //         return res.status(400).json({ message: "something is wrong" });
    //     }
    //     res.json({user})
    // }

    createUser(req, res) {
        res.json('from controller');
    }







}




