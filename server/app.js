const express = require('express')
const next = require('next')
const db = require('./config/database')

const { Products } = require('./models')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = true //process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

db.authenticate()
  .then(() =>console.log('Database Connected..'))
  .catch(err => console.log(err))

app.prepare().then(() => {
  const server = express()

  server.get('/admin', (req, res) => {
    Products.findAll()
      .then((list) => app.render(req, res, '/admin', list))
    
    // return app.render(req, res, '/admin', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
