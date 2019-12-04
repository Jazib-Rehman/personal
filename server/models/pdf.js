const Sequelize = require('sequelize')

const db = require('../config/database')

const PDF = db.define('pdf', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = PDF;

