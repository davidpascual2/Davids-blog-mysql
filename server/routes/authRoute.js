const router = require('express').Router(); 
// const { Auth } = require('../models');

//imports the functions (opeations?) from post auth controller file. all needed functions must be added
const {
    register,
    login,
    logout
 } = require('../controllers/authController'); // import { addPost } from '../controllers/postController.js';


router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout)




module.exports = router;

//====================== TYPE: MODULE (ES6)======================//

// import express from "express";
// import { register, login, logout } from '../controllers/authController.js'

// const router = express.Router();

// router.post('/register', register)
// router.post('/login', login)
// router.post('/logout', logout)

// export defualt router