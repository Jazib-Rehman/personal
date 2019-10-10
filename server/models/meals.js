const Sequelize = require('sequelize')

const db = require('../config/database')

const Meals = db.define('meals', {
    name: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    },
    categoryId: {
        type: Sequelize.INTEGER,
    },
    tags: {
        type: Sequelize.STRING,
    },
}, {
    freezeTableName: true
})

module.exports = Meals;



