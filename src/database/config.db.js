module.exports = {
    database: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'ionic_wallet',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

/* module.exports = {
    database: {
        host: '34.71.100.155',
        user: 'rjossavillalobos@gmail.com',
        password: 'maatsura04',
        database: 'wallet',
        dialect: 'mysql',
        dialectOptions: {
            socketPath: '/cloudsql/folkloric-stone-393523:us-central1:wallet'
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
} */