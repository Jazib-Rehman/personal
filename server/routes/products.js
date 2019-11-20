const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Product = require('../models/product')

// Get all products
router.get('/', (req, res) =>
    Product.findAll()
        .then(products => {
            res.send(products);
        })
        .catch(err => console.log(err)));

router.get('/add', (req, res) => res.send('product added'));

// Add a Product
router.post('/add', (req, res) => {
    const data = {
        name: 'kamil',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        nutrition: 'this is kamil nutrition',
        price: 233
    }

    let { name, description, nutrition, price } = data;

    // Insert into table
    Product.create({
        name,
        description,
        nutrition,
        price
    })
        .then(product => res.redirect('/products'))
        .catch(err => console.log(err));
});

module.exports = router;