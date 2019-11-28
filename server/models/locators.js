const Sequelize = require('sequelize')

const db = require('../config/database')

const Locators = db.define('locators', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Locators;

