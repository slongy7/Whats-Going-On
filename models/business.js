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
        category: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        tableName: 'business',
        underscored: true,
        modelName: 'business',
    }
)

module.exports = Business;