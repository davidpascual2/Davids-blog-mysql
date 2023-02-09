//import express from "express"
//const router = express.Router()
const router = require('express').Router(); 
// const { User, Post, } = require('../../models');

//imports the add post function (opeation?) from post controller file. all needed functions must be added
const { addPost } = require('../../controllers/postController'); // import { addPost } from '../controllers/postController.js';


router.get('/test', addPost)




module.exports = router;

//====================== TYPE: MODULE (ES6)======================//

