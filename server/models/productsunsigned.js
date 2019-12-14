const Sequelize = require('sequelize');
const db = require('../config/database');

const ProductsUnsigned = db.define('products', {
    name: {
        type: Sequelize.STRING
    },
    cat_id: {
        type: Sequelize.INTEGER
    },
    subcat_id: {
        type: Sequelize.INTEGER
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
    image: {
        type: Sequelize.STRING
    }
});


module.exports = ProductsUnsigned;
