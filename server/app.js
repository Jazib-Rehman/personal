const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const db = require('./config/database')
const Categories = require('./models/Categories')
const Product = require('./models/Product')
const SubCategories = require('./models/SubCategories')
const http = require("http");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))


const app = express();
app.use(cors());
express.static(path.join(__dirname, "./../public"))

const upload = multer({
	dest: "/uploads/images"
});

const handleError = (err, res) => {
	res
		.status(500)
		.contentType("text/plain")
		.end("Oops! Something went wrong!");
};


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())

app.post(
	"/upload",
	upload.single("file"),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, "./../public/uploads/images/" + time + ".jpg");

		if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
			fs.rename(tempPath, targetPath, err => {
				if (err) return handleError(err, res);
				console.log(req.body.cat_id, req.body.subcat_id);
				Product.create({
					name: req.body.name,
					cat_id: req.body.cat_id,
					subcat_id: req.body.subcat_id,
					description: req.body.description,
					nutrition: req.body.nutrition,
					price: req.body.price,
					image: "uploads/images/" + time,
				})
					.then(product => res.send(product))
					.catch(err => console.log(err));

				res
					.redirect('http://localhost:3000/admin/add-product')
			});
		} else {
			fs.unlink(tempPath, err => {
				if (err) return handleError(err, res);

				res
					.status(403)
					.contentType("text/plain")
					.end("Only .jpg files are allowed!");
			});
		}
	}
);

app.post('/add-product', urlencodedParser, (req, res) => {
	Product.create(req.body)
		.then(product => res.send(product))
		.catch(err => console.log(err));
});

app.get('/products', (req, res) =>
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.get('/categories', (req, res) =>
	Categories.findAll()
		.then(categories => {
			res.send(categories);
		})
		.catch(err => console.log(err)));

app.get('/sub-categories', (req, res) =>
	SubCategories.findAll()
		.then(subcategories => {
			res.send(subcategories);
		})
		.catch(err => console.log(err)));

app.post('/add-category', urlencodedParser, (req, res) => {
	Categories.create(req.body)
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
	SubCategories.create(req.body)
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
