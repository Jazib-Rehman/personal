const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev =  true //process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/admin', (req, res) => {
    return app.render(req, res, '/admin', req.query)
  })

//   server.get('/b', (req, res) => {
//     return app.render(req, res, '/b', req.query)
//   })

//   server.get('/posts/:id', (req, res) => {
//     list = ['asd','asd','asfdasd'];
//     return app.render(req, res, '/posts', { id: req.params.id, list })
//   })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
