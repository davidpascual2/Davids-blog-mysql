//import express from "express"
//const router = express.Router()

const router = require('express').Router(); 
const { User, Post, } = require('../models');

// import { addPost } from '../controllers/postController.js';
const { addPost } = require('../controllers/postController');


router.get('/test', addPost)

module.exports = router;