const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection.db');

class Service extends Model{};

Service.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    service_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    service_nro_client: {
        type: DataTypes.STRING,
        allowNull: false
    },
    service_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    sequelize,
    modelName: 'Service'
});

module.exports = Service;