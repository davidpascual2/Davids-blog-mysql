const router = require('express').Router()


const postRoute = require('./postRoute') //link file

//middleware function
router.use('/', postRoute); //first arg should be path? and second arg is module that handles request







module.exports = router