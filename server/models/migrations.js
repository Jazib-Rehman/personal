const Product = require('./product');
const Categories = require('./categories');
const SubCategories = require('./subCategories');
const Locators = require('./locators');
const Channels = require('./channels');
const Banner = require('./banner');
const Basics = require('./basics');
const PDF = require('./pdf');

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
    console.log('locators table created!')
})
Channels.sync({ force: true }).then(() => {
    console.log('channels table created!')
})
Banner.sync({ force: true }).then(() => {
    console.log('banner table created!')
})
Basics.sync({ force: true }).then(() => {
    console.log('basics table created!')
})
PDF.sync({ force: true }).then(() => {
    console.log('pdf table created!')
})
