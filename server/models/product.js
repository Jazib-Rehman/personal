const Sequelize = require('sequelize')

const db = require('./../config/database')

const Products = db.define('products', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    categoryId: {
        type: Sequelize.INTEGER,
        field: 'categoryId'
    },
}, {
    freezeTableName: true
})

module.exports = Products;



