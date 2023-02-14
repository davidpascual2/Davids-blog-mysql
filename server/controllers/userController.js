// const router = require('express').Router();
const { User, Post } = require('../models'); //needed?

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

    getUsers: async function( req, res) { //
        try {
            const user = await User.findAll() //users variable?
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }  
    },

    createUser: async function (req, res) { //router.post('/')
        try {
            
            const userData = await User.create({
                username: req.body.username,
                email:req.body.email,
                password: req.body.password
            });
            res.status(200).json(userData)

            // res.json(userData);
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
        // try {
        //     const userData = await User.create(req.body);
        //     res.json(userData);
        // } catch (err) {
        //     console.log(err)
        //     res.status(500).json(err)
        // }
    },

    login: async function (req, res) {
        try {
            const userData = await User.findOne({ where: { username: req.body.username } }); //FINEONE???? or findByPk
                if(!userData) {
                    res.status(400).json({ message: 'incorrect username or password'})
                    return;
                }

            const validPassword = userData.checkPassword(req.body.password);
                if (!validPassword) {
                    res.status(400).json({ message: 'invalid username or password'});
                    return;
                }
                console.log(userData, "userData")

        } catch (err){
            console.log(err)
            res.status(400).json(err)
        }
    },




}




