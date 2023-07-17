const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection.db');

class Owncheck extends Model{};

Owncheck.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    owncheck_name: {
        type: DataTypes.STRING,
        allowNull: false
    },/* 
    owncheck_nro_client: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owncheck_type: {
        type: DataTypes.STRING,
        allowNull: false
    } */
},{
    timestamps: true,
    sequelize,
    modelName: 'OwnCheck'
});

module.exports = Owncheck;