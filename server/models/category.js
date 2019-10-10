module.exports = (sequelize, type) => {
    const Categories  = sequelize.define('categories', {
        name: {
            type: type.STRING,
            field: 'name'
        },
    }, {
        freezeTableName: true
    })
    return Categories;
}



