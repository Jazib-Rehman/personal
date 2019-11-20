const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('products', {
    name: {
        type: Sequelize.STRING
    },
    cat_id: {
        type: Sequelize.STRING
    },
    subcat_id: {
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
    image: {
        type: Sequelize.STRING
    }
});


module.exports = Product;
