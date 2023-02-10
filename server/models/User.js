const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

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
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true,
        //     }
        // },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4],
            }
        },
        // img: {
        //     type: DataTypes.STRING //this is a string because we do not store photo in database. stored in server(cloud server) taking url and pasting inside table row 
        // }

    },
    {
        hooks: {
            beforeCreate(userData) {
                userData.username = userData.username.toLowerCase();
                userData.password = bcrypt.hashSync(userData.password, 10);
                return userData;
            },
        },
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




