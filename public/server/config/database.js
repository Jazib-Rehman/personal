var Sequelize = require('sequelize')



module.exports = new Sequelize('shawarma', 'root', '', {
    host: 'localhost',
    // host: '127.0.0.1',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        collate: 'utf8mb4_general_ci',
        useUTC: false,
        timezone: 'Etc/GMT0'
    },
    timezone: 'Etc/GMT0'
});


// Products.up(sequelize, Sequelize)
// Categories.up(sequelize, Sequelize)