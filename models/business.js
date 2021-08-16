const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Business extends Model { }

Business.init(
    {
        id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(100),
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER(100),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isOpen: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'business',
        underscored: true,
        modelName: 'business',
    }
)

module.exports = Business;