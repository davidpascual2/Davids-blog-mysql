// const router = require('express').Router()


// const postRoute = require('./postRoute') //link file

// //middleware function
// router.use('/', postRoute); //first arg should be path? and second arg is module that handles request


// module.exports = router

const router = require('express').Router(); // creates a new router object that can be used to route incoming HTTP requests to different functions
const apiRoutes = require('./api'); //function is used to include and evaluate the code in the file located at "./api". The result of this evaluation is then assigned to the "apiRoutes" constant.

router.use('/api', apiRoutes); //function tells the Express app that whenever a request is made to the "/api" URL path, the "apiRoutes" module should be used to handle the request.

router.use((req, res) => { //This serves as a fallback mechanism to catch any requests made to undefined routes and return a meaningful response to the client, rather than just returning a 404 error.
  return res.send('Wrong route!');
});

module.exports = router; //statement makes the "router" constant accessible to other modules that require this module.