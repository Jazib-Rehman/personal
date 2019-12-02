const Sequelize = require('sequelize')

const db = require('../config/database')

const Banner = db.define('banner', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Banner;

