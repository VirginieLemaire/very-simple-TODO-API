const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Task extends Model {};

Task.init(
    {
        task: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        sequelize,
        tableName: 'todos'
    }
);

module.exports = Task;