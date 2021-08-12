const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Business extends Model { }

Business.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        type: {
            type: DataTypes.INTEGER(100),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        tableName: 'BUSINESS',
        underscored: true,
        modelName: 'business',
    }
)

module.exports = Business;