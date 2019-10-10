const Products = {
    up(sequelize, Sequelize) {
        sequelize.define('products', {
            name: {
                type: Sequelize.STRING,
                field: 'name'
            },
            categoryId: {
                type: Sequelize.INTEGER
            }
        }, {
            freezeTableName: true
        }).sync({ force: true }).then(() => {
        })
    }

}

module.exports = Products
