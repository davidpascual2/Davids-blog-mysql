//THIS PAGE ALLOWS YOU TO CREATE TABLES AND COLUMNS AND ADD REQUIREMENTS ON COLUMS 

const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

// create new sequelize model for reviews
class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        movie: {
            type: DataTypes.STRING
        },
        review: {
            type: DataTypes.STRING
        }
    },
    {
        //link to database connection
        sequelize,
        freezeTableName: true,
        //set to false to remove created_at and updated at fields
        timestamps: false,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;