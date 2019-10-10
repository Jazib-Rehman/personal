const Sequelize = require('sequelize')

const db = require('../config/database')

const Categories = db.define('categories', {
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

module.exports = Categories;

