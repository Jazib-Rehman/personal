const express = require('express')
var bodyParser = require('body-parser')
const next = require('next')
const db = require('./config/database')

const { Meals } = require('./models')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = true //process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

db.authenticate()
  .then(() => console.log('Database Connected..'))
  .catch(err => console.log(err))

app.prepare().then(() => {

  server.get('/admin', (req, res) => {
    Meals.findAll()
      .then((list) => {
        console.log("DATA:", list.map((item) => item.name))
        app.render(req, res, '/admin', { list: list })
      })
  })

  server.post('/admin/meals/add', (req, res) => {
    const data = req.body;
    Meals.create(data).then(() => res.send('Product added successfully'))
    return;
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
