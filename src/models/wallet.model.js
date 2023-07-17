const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection.db');

class Wallet extends Model{};

Wallet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    wallet_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wallet_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true,
    sequelize,
    modelName: 'Wallet'
});

module.exports = Wallet;