
const mock = require('./../../pages/mock.json')

const meals = mock.meals.map((item) => {
    let meals = item.meals.map((meal) => {
        return {
            ...meal,
            image: `/static/assets/menu/${item.name}/${meal.name}.jpg`,
            isSpicy: meal.tags && meal.tags.toLowerCase().includes('spicy'),
            isNormal: meal.tags && meal.tags.toLowerCase().includes('normal'),
            isHomos: meal.tags && meal.tags.toLowerCase().includes('homos'),
            isTahina: meal.tags && meal.tags.toLowerCase().includes('tahina'),
            tags: meal.tags ? meal.tags.split(',') : []
        }
    });
    return {
        ...item,
        meals,
    }
});


const Categories = {
    up(sequelize, Sequelize) {
        const cat = sequelize.define('categories', {
            name: {
                type: Sequelize.STRING,
                field: 'name'
            },
        }, {
            freezeTableName: true
        }).sync({ force: true }).then(() => {
            meals.forEach(({ name }) => {
                cat.create({
                    name
                }).then(() => console.log('row added'))
            })

        })
    }
}

module.exports = Categories 
