const Product = require('./Product');
const Categories = require('./Categories');
const SubCategories = require('./SubCategories');

Product.sync({ force: true }).then(() => {
    console.log('table created!')
})
Categories.sync({ force: true }).then(() => {
    console.log('table created!')
})
SubCategories.sync({ force: true }).then(() => {
    console.log('table created!')
})
