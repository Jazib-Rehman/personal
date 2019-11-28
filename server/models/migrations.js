const Product = require('./product');
const Categories = require('./categories');
const SubCategories = require('./subCategories');
const Locators = require('./locators');

Categories.sync({ force: true }).then(() => {
    console.log('categoriies table created!')
})
SubCategories.sync({ force: true }).then(() => {
    console.log('sub-categories table created!')
})
Product.sync({ force: true }).then(() => {
    console.log('products table created!')
})
Locators.sync({ force: true }).then(() => {
    console.log('sub-categories table created!')
})
