const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        },
        img: {
            type: DataTypes.STRING //this is a string because we do not store photo in database. stored in server(cloud server) taking url and pasting inside table row 
        }

    },
    {
        //link to database connection
        sequelize,
        freezeTableName: true,
        //set to false to remove created_at and updated at fields
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;


