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

const ProductModel = require('./product')


const Product = ProductModel(sequelize,Sequelize);

Product.sync().then(()=>{
    console.log('Table Created')
})



module.exports = {
    Product
}