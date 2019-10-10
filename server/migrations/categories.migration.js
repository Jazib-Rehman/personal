const Categories = {
    up(sequelize,Sequelize) {
        sequelize.define('categories', {
            name: {
                type: Sequelize.STRING,
                field: 'name'
            },
        }, {
            freezeTableName: true
        }).sync({ force: true }).then(() => { })
    }
}

module.exports = Categories 
