const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        crowded: {
            type: DataTypes.BOOLEAN,
        },
        masks: {
            type: DataTypes.BOOLEAN,
        },
        entertainment: {
            type: DataTypes.BOOLEAN,
        },
        specials: {
            type: DataTypes.STRING(100),
        },
        quality : {
            type: DataTypes.INTEGER,
        },
        addComment: {
            type: DataTypes.STRING(100),
        },
        busId: {
            type: DataTypes.STRING(100),
            allowNull: false,
            references: {
                model: 'BUSINESS',
                key: 'id',
            }
        },
        userId: {
            type: DataTypes.INTEGER(100),
            allowNull: false,
            references: {
                model: 'USER',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        tableName: 'POSTS',
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post;