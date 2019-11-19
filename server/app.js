const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'shawarma'
});

connection.connect(err => {
	if (err) {
		return err;
	}
});

app.use(cors());

app.get('/', (req, res) => {
	res.send('goto /products')
});

app.get('/products', (req, res) => {
	connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

app.get('/products/add', (req, res) => {
	const { id, name, description, nutrition, price } = req.query;
	const INSERT_PPRODUCTS_QUERY = `INSERT INTO products ( id, name, description, nutrition, price ) VALUES('${id}', '${name}', '${description}', '${nutrition}', '${price}')`
	connection.query(INSERT_PPRODUCTS_QUERY, (err, results) => {
		if (err) {
			return res.send(err)
		} else {
			return res.send('succesfully added product')
		}
	});
});

app.listen(3001, () => {
	console.log('Server Listening on port: 3001')
});


// const express = require('express')
// var bodyParser = require('body-parser')
// const next = require('next')
// const db = require('./config/database')

// const { Meals } = require('./models')

// const port = parseInt(process.env.PORT, 10) || 3001
// const dev = true //process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const server = express()
// // parse application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// server.use(bodyParser.json())

// db.authenticate()
//   .then(() => console.log('Database Connected..'))
//   .catch(err => console.log(err))

// app.prepare().then(() => {

//   server.get('/admin', (req, res) => {
//     Meals.findAll()
//       .then((list) => {
//         app.render(req, res, '/admin', { list: list })
//       })
//   })

//   server.post('/admin/meals/add', (req, res) => {
//     const data = req.body;
//     Meals.create(data).then(() => res.send('Product added successfully'))
//     return;
//   })

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(port, err => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })
