// // //queries should not be written directly on file
// const { User } = require('../models');
// const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt') 

// module.exports = {
//     //operations can be directly written in routes but separating them is better
//         register (req, res) {
//             //check existing user
//             const q = "SELECT * FROM users WHERE email = ? OR username ?"

//             User.query(q,[req.body.email, req.body.username], (err, data) => {
//                 if(err) return res.json(err)
//                 if(data.length) return res.status(409).json("User already exists");

//                 //hash password and create user?
//                 const salt = bcrypt.genSaltSync(10);
//                 const hash = bcrypt.hashSync(req.body.password, salt);

//                 const q = "INSERT INTO users('username', 'email','password') VALUES (?)"
//                 const values = [
//                     req.body.username,
//                     req.body.email,
//                     hash,
//                 ]

//                 User.query(q, [values], (err, data) => {
//                     if(err) return res.json(err);
//                     return res.status(200).json("User has been created")
//                 })
//             });
//         },

//         login(req, res) {
//             res.json('from controller');
//         },

//         logout(req, res) {
//             res.json('from controller');
//         }
//     }


    