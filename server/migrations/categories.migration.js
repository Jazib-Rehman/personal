var Sequelize = require('sequelize')

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


const Categories = {
    up() {
        sequelize.define('categories', {
            name: {
                type: Sequelize.STRING,
                field: 'name'
            },
        }, {
            freezeTableName: true
        }).sync({ force: true }).then(() => { })
    }
}

module.exports = Categories 
