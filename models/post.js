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
            type: DataTypes.STRING,
        },
        masks: {
            type: DataTypes.STRING,
        },
        entertainment: {
            type: DataTypes.STRING,
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
        }
        // user_Id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     }
        // },
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
