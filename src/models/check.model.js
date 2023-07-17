const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection.db');

class Check extends Model{};

Check.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    check_month: {
        type: DataTypes.STRING,
        allowNull: false
    },
    check_value: {
        type: DataTypes.INTEGER,
    },
    check_owncheck: {
        type: DataTypes.STRING,
    },
    check_service: {
        type: DataTypes.STRING,
    }
},{
    timestamps: true,
    sequelize,
    modelName: 'Check'
});

module.exports = Check;