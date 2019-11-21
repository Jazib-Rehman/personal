const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const db = require('./config/database')
const Categories = require('./models/Categories')
const Product = require('./models/Product')
const SubCategories = require('./models/SubCategories')


db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))

const app = express();
app.use(cors());

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())

app.post('/add-product', urlencodedParser, (req, res) => {
	const data = {
		name: req.body.name,
		cat_id: req.body.cat_id,
		subcat_id: req.body.subcat_id,
		description: req.body.description,
		nutrition: req.body.nutrition,
		price: req.body.price,
		image: req.body.image,
	}
	Product.create(data)
		.then(product => res.send(product))
		.catch(err => console.log(err));
});

app.get('/product', (req, res) =>
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.post('/add-category', urlencodedParser, (req, res) => {
	const data = {
		name: req.body.name
	}
	Categories.create(data)
		.then(product => res.send(product))
		.catch(err => console.log(err));
});

app.get('/category', (req, res) =>
	Categories.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.post('/add-sub-category', urlencodedParser, (req, res) => {
	const data = {
		name: req.body.name,
		cat_id: req.body.cat_id
	}
	SubCategories.create(data)
		.then(product => res.send(product))
		.catch(err => console.log(err));
});

app.get('/sub-category', (req, res) =>
	SubCategories.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));



app.listen(3001, () => {
	console.log('Server Listening on port: 3001')
});
