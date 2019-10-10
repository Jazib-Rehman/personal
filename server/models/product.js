module.exports = (sequelize, type) => {
    const Product = sequelize.define('categories', {
        name: {
            type: type.STRING,
            field: 'name'
        },
    }, {
        freezeTableName: true
    })
    return Product;
}



