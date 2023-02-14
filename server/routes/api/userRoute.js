const router = require('express').Router(); 
// const { Auth } = require('../models');

//imports the functions (opeations?) from post auth controller file. all needed functions must be added
const {
    // register,
    // login,
    // logout
    login,
    getUsers,
    createUser,

 } = require('../../controllers/userController'); // import { addPost } from '../controllers/postController.js';

router.get('/', getUsers)
router.post('/', createUser)
router.post('/login', login)
// router.route('/register', register);
// router.route('/')
//  .get(createUser)
// router.route('/login', login);
// router.route('/logout', logout);




module.exports = router;