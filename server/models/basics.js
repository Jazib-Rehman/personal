const Sequelize = require('sequelize')

const db = require('../config/database')

const Basics = db.define('basics', {
    logo: {
        type: Sequelize.STRING
    },
    site_header: {
        type: Sequelize.STRING
    },
    categories: {
        type: Sequelize.STRING
    },
    channels: {
        type: Sequelize.STRING
    },
    locator: {
        type: Sequelize.STRING
    },
    twitter: {
        type: Sequelize.STRING
    },
    facebook: {
        type: Sequelize.STRING
    },
    instagram: {
        type: Sequelize.STRING
    },
    youtube: {
        type: Sequelize.STRING
    },
});

module.exports = Basics;

