const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const db = require('./config/database')
const Product = require('./models/product')


const Sequelize = require('sequelize');


db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send('goto /products')
});

//Products Routes
app.use('/products', require('./routes/products'));


app.listen(3001, () => {
	console.log('Server Listening on port: 3001')
});
