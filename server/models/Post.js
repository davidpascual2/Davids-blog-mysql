const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { // ADD ON DELETE CASCADE!!!
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        //link to database connection
        sequelize,
        freezeTableName: true,
        //set to false to remove created_at and updated at fields
        timestamps: false,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;
