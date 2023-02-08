const router = require('express').Router()


const post = require('./postRoute')

//middleware
router.use('/', post);

module.exports = router