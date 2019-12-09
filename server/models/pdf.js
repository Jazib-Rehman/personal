const Sequelize = require('sequelize')

const db = require('../config/database')

const PDF = db.define('pdfs', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = PDF;

