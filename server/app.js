
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const database = require('./config/database')
const http = require("http");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('shawarma', 'root', '', {
	host: 'localhost',
	// host: '127.0.0.1',
	dialect: 'mariadb',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	dialectOptions: {
		useUTC: false //for reading from database
	},
	timezone: 'Etc/GMT0' //for writing to database
});

database.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))


const app = express();
app.use(cors());
express.static(path.join(__dirname, "./../public"))

const upload = multer({
	dest: "/uploads/images"
});

const folder = "./../public";
const redirect = 'http://localhost:3000';

const handleError = (err, res) => {
	res
		.status(500)
		.contentType("text/plain")
		.end("Oops! Something went wrong!");
};


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())

//Models/tables
Categories = require('./models/categories'), (sequelize, { modelName: 'Categories' });
Product = require('./models/product'), (sequelize, { modelName: 'Product' });
Locators = require('./models/locators'), (sequelize, { modelName: 'Locators' });
Channels = require('./models/channels'), (sequelize, { modelName: 'Channels' });
ProductOnly = require('./models/productonly'), (sequelize, { modelName: 'ProductOnly' });
Banner = require('./models/banner'), (sequelize, { modelName: 'Banner' });
// SubCategories = require('./models/subcategories'), (sequelize, { modelName: 'SubCategories' });

//Relations
Categories.hasMany(Product, {
	foreignKey: {
		fieldName: 'cat_id'
	}
});
Product.belongsTo(Categories);

app.post(
	"/upload",
	upload.single("image"),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/images/" + time + path.extname(req.file.originalname);
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/images/" + time + path.extname(req.file.originalname));
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			Product.create({
				name: req.body.name,
				cat_id: req.body.cat_id,
				subcat_id: req.body.subcat_id,
				description: req.body.description,
				nutrition: req.body.nutrition,
				price: req.body.price,
				image: imgURL
			})
				.then(product => res.send(product))
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/add-product");
		});
	}
);

app.post(
	"/update-product",
	upload.single("image"),
	(req, res) => {
		// console.log(req.body)
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/images/" + time + path.extname(req.file.originalname);
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/images/" + time + path.extname(req.file.originalname));
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			ProductOnly.update(
				{
					name: req.body.name,
					cat_id: req.body.cat_id,
					subcat_id: req.body.subcat_id,
					description: req.body.description,
					nutrition: req.body.nutrition,
					price: req.body.price,
					image: imgURL
				},
				{ where: { id: req.body.id } }
			)
				.then(product => {
					const path = "./public/" + req.body.img
					fs.stat(path, function (err, stats) {
						console.log(stats);//here we got all information of file in stats variable
						if (err) {
							return console.error(err);
						}

						fs.unlink(path, function (err) {
							if (err) return console.log(err);
							console.log('file deleted successfully');
						});
					});
					res.send(product)
				})
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/edit?id=" + req.body.id);
		});
	}
);

app.post('/delete-product', (req, res) => {
	console.log(folder + "/" + req.body.image)
	Product.destroy({
		where: {
			id: req.body.id
		}
	})
		.then(product => {
			const path = "./public/" + req.body.image
			fs.stat(path, function (err, stats) {
				console.log(stats);//here we got all information of file in stats variable
				if (err) {
					return console.error(err);
				}

				fs.unlink(path, function (err) {
					if (err) return console.log(err);
					console.log('file deleted successfully');
				});
			});
			res.status(200)
		})
		.catch(err => console.log(err));
	// res.redirect(redirect + "/admin/products");
});

app.get('/product', (req, res) => {
	Categories.findAll()
		.then(categories => {
			ProductOnly.findAll({ where: { id: req.query.id } })
				.then(products => {
					const data = {
						categories,
						product: products[0]
					}
					res.send(data);
				})
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
}
);

app.get('/categories-with-products', (req, res) => {

	Categories.findAll({
		subQuery: true,
		include: [
			{
				model: Product,
				attributes: [
					['id', 'id'],
					['name', 'name'],
					['cat_id', 'cat_id'],
					['subcat_id', 'subcat_id'],
					['description', 'description'],
					['nutrition', 'nutrition'],
					['price', 'price'],
					['image', 'image'],
					['createdAt', 'createdAt'],
					['updatedAt', 'updatedAt']
				]
			}
		],
		group: ['categories.id']
	}).then((items) => {
		res.send(items);
	}).catch(function (err) {
		res.send(err);
	});
})

app.post(
	'/add-category',
	upload.single('image'),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/categories/" + time + ".jpg";
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/categories/" + time + ".jpg");
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			Categories.create({
				name: req.body.name,
				image: imgURL
			})
				.then(product => res.send(product))
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/categories");
		});
	}
);

app.post(
	'/add-banner',
	upload.single('image'),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/site-headers/" + time + ".jpg";
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/site-headers/" + time + ".jpg");
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			Banner.create({
				name: req.body.name,
				image: imgURL
			})
				.then(product => res.send(product))
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/categories");
		});
	}
);

app.post(
	'/add-locator',
	upload.single('image'),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/locators/" + time + ".jpg";
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/locators/" + time + ".jpg");
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			Locators.create({
				name: req.body.name,
				image: imgURL
			})
				.then(product => res.send(product))
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/locator");
		});
	}
);

app.post(
	'/add-channel',
	upload.single('image'),
	(req, res) => {
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hours = newDate.getHours();
		let minutes = newDate.getMinutes();
		let seconds = newDate.getSeconds();

		let time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;

		const imgURL = "uploads/channels/" + time + ".jpg";
		const tempPath = req.file.path;
		const targetPath = path.join(__dirname, folder + "/uploads/channels/" + time + ".jpg");
		fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			Channels.create({
				name: req.body.name,
				link: req.body.link,
				image: imgURL
			})
				.then(product => res.send(product))
				.catch(err => console.log(err));

			// res.redirect(redirect + "/admin/channels");
		});
	}
);

app.get('/banner', (req, res) =>
	Banner.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.get('/category', (req, res) =>
	Categories.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.get('/locators', (req, res) =>
	Locators.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.get('/channels', (req, res) =>
	Channels.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(err => console.log(err)));

app.listen(3001, () => {
	console.log('Server Listening on port: 3001')
});
