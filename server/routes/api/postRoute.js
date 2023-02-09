const router = require('express').Router(); 
// const { User, Post, } = require('../../models');

//imports the add post function (opeation?) from post controller file. all needed functions must be added
const { 
    // addPost,
    getPosts,
    createPost,
 } = require('../../controllers/postController'); // import { addPost } from '../controllers/postController.js';


// router.get('/', addPost);
// router.route('/').get(getPosts).post(createPost)
//OR
router.get('/', getPosts)
router.post('/', createPost) //router.post('/monkey', createPost) --> localhost:3001/api/posts/monkey

// localhost:3001/server/postController/test




module.exports = router;

//====================== TYPE: MODULE (ES6)======================//

