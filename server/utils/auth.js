// const jwt = require('jsonwebtoken');

// const secret = 'mysecret';
// const expiration = '2h';

// module.exports = {

//     authMiddleware: function({req}) {
//         let token = req.body.token || req.query.token || req.headers.authorization;


//     }
// } 



// const token = jwt.sign({id:data[0]}, 'jwtkey');
// const {password, ...other} = data[0] //separate password and other information
// res.cookie('access_token', token, {
//     httpOnly:true
// }).status(200).json(other) //we dont want to send hashed password so we send other info which was set above



// const withAuth = (req, res, next) => {

// }

// module.exports = withAuth