const router = require('express').Router();

const postRoutes = require('./postRoute');
const userRoutes = require('./userRoute')

router.use('/users', userRoutes);

router.use('/posts', postRoutes); //this function tells the Express app that whenever a request is made to the "/posts" URL path, the "postRoutes" module should be used to handle the request.
//localhost:3001/api/posts --> GET and POST
module.exports = router;