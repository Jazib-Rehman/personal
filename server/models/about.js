const Sequelize = require('sequelize')

const db = require('../config/database')

const About = db.define('about_us', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
});

module.exports = About;

