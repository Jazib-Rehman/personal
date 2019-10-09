const express = require('express')
const next = require('next')
const mysql = require('mysql')
var Sequelize = require('sequelize')


const port = parseInt(process.env.PORT, 10) || 3000
const dev = true //process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var sequelize = new Sequelize('shawarma', 'root', 'welcome', {
    host: 'localhost',
    // dialect: 'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
    host: '127.0.0.1',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})

// var User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING,
//       field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   }, {
//     freezeTableName: true // Model tableName will be the same as the model name
//   });
  
  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });



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
