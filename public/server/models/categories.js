const Sequelize = require('sequelize')

const db = require('../config/database')

const Categories = db.define('categories', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Categories;

