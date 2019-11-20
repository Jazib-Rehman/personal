const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    nutrition: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    // image: {
    //     type: Sequelize.STRING
    // }
});

module.exports = Product;

// const Categories = require('./categories')
// const Meals = require('./meals')

// module.exports = {
//     Meals,
//     Categories
// }