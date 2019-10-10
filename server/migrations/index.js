const { Meals, Categories } = require('./../models')
const mock = require('./../../pages/mock.json')
const Sequelize = require('sequelize')

const db = require('../config/database')


const categ = mock.meals.map((item) => {
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

// db.define('meals', {
//     name: { type: Sequelize.STRING },
//     image: { type: Sequelize.STRING },
//     tags: { type: Sequelize.STRING },
//     categoryId: { type: Sequelize.INTEGER }
// }, { freezeTableName: true }).sync({ force: true });

categ.forEach((cat, i) => {
    // Categories.create({
    //     name
    // }).then(() => console.log('row added'))
    cat.meals.forEach(({ name, image, tags }) => {
        Meals.create({
            name,
            image,
            tags:tags.toString(),
            categoryId: i
        }).then(() => console.log('row added')).catch((err)=> console.log(err))
    })
});