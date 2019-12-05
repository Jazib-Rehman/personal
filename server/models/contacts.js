const Sequelize = require('sequelize')

const db = require('../config/database')

const Contacts = db.define('contacts', {
    f_name: {
        type: Sequelize.STRING
    },
    l_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
});

module.exports = Contacts;

