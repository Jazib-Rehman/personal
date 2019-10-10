var Sequelize = require('sequelize')

const Products = require('./products.migration')
const Categories = require('./categories.migration')



var sequelize = new Sequelize('shawarma', 'root', 'welcome', {
    host: 'localhost',
    host: '127.0.0.1',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        useUTC: false //for reading from database
    },
    timezone: 'Etc/GMT0' //for writing to database
});


Products.up(sequelize, Sequelize)
Categories.up(sequelize, Sequelize)