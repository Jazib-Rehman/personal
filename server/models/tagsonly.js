const Sequelize = require('sequelize')

const db = require('../config/database')

const TagsOnly = db.define('tags', {
    name: {
        type: Sequelize.STRING
    },
    pro_id: {
        type: Sequelize.STRING
    },
});

module.exports = TagsOnly;

