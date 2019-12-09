const Sequelize = require('sequelize')

const db = require('../config/database')

const Channels = db.define('channels', {
    name: {
        type: Sequelize.STRING
    },
    link: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Channels;

