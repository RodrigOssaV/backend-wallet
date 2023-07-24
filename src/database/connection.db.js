const {database} = require('./config.db');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        //port: 3000,
        dialect: database.dialect,
        logging: false,
        /* ssl: {
            rejectUnauthorized: true,
        }, */
        /* dialectOptions: {
            socketPath: database.dialectOptions
        }, */
        pool: {
            max: database.pool.max,
            min: database.pool.min,
            acquire: database.pool.acquire,
            idle: database.pool.idle
        }
    }
);

module.exports = sequelize;