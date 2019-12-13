const Sequelize = require('sequelize')

const db = require('../config/database')

const Tags = db.define('tags', {
    name: {
        type: Sequelize.STRING
    },
    pro_id: {
        type: Sequelize.STRING
    },
});

module.exports = Tags;

