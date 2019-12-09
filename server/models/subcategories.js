const Sequelize = require('sequelize')

const db = require('../config/database')

const SubCategories = db.define('sub_categories', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    cat_id: {
        type: Sequelize.STRING,
        field: 'cat_id'
    },
    image: {
        type: Sequelize.STRING,
        field: 'image'
    }
}, {
    freezeTableName: true
})

module.exports = SubCategories;

