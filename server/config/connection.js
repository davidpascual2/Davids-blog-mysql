import mysql from 'mysql2';
import Sequelize from 'sequelize'; //const Sequelize = require('sequelize');



require('dotenv').config({path:'../.env'})

//create a connection object
export const sequelize = new Sequelize(
    //must be in this order 

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    {
        //database location
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306 //different port that is set in server.js
    }
);

// let sequelize;

// if(process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize(
//         process.env.
//     )
// }
