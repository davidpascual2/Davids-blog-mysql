const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const mysql = require('mysql2');
const routes = require('./routes')
const cookieParser = require('cookie-parser');
//import the connection object
const sequelize = require('./config/connection')

// IMPORT MODEL TO SYNC TABLE WITH DATABASE
// const Review = require('./models/Review');
const User = require('./models/User');
const Post = require('./models/Post');

//=================//
const app = express();
const PORT = process.env.PORT || 3001; //must be on different port than that on connection.js

app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);


//========EVERY DATABASE MUST HAVE THIS=========

// const db = mysql.createConnection(
//     {
//     host: "127.0.0.1",
//     user: "root",
//     password: "Dave52416",
//     database: "review_DB",
// });

// sequelize.sync().then(() => {
//     app.listen(PORT, () => console.log('Now Listening'));
// })


//========= GET ==========//
// app.get('/api/get', (req, res) => {

//     const sqlSelect = 'SELECT * FROM review_table';
//     db.query(sqlSelect, (err, result) => { //ref var names above
//         res.send(result);
//         // console.log(result)

//     })
// })

//========= POST ===========//
// app.post('/api/insert', (req, res) => {

//     const movie_name = req.body.movie_name //ref var in axios.post
//     const movie_review = req.body.movie_review //ref var in axios.post

//     const sqlInsert = 'INSERT INTO review_table (movie_name, movie_review) VALUES (?,?)'
//     db.query(sqlInsert, [movie_name, movie_review], (err, result) => { //ref var names above
//         console.log(result)

//     })
// });

//======== DELETE =========//

// app.delete('/api/delete/:movie_name', (req, res) => {
//     const name = req.params.movie_name
//     const sqlDelete =
//     "DELETE FROM review_table WHERE movie_name = ?";

//     db.query(sqlDelete, name, (err, result) => {
//        if (err) console.log(err)
//     })
// })

//======= UPDATE ===========//

// app.put('/api/update', (req, res) => {
//     const name = req.body.movie_name;
//     const review = req.body.movie_review;
//     const sqlUpdate = "UPDATE review_table SET  movie_review = ? WHERE movie_name = ? ";

//     db.query(sqlUpdate, [review, name], (err, result) => {
//         if(err) console.log(err)
//     })
// })


// app.listen(3001, () => {
//     console.log(`running on port 3001`)
// });


// =========================================================//

//force true drops/recreates table(s) on every sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });

// same code as above but with async/await and try/catch
// const start = async () => {
//     try {
//         await sequelize.sync();
//         app.listen(PORT, () => console.log('Now Listening'));
//     } catch (error) {
//         console.error(error);
//     }
// };
// start();

