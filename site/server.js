const express = require('express')
const next = require('next')
const loadData  = require('./loader');

// checking in if node is run in production mode
const dev = process.env.NODE_ENV !== 'production'

// launching next in correct mode (production / development_)
const app = next({ dev })


const handle = app.getRequestHandler()
// initiate next app
app.prepare()
    .then(() => {
        // initiate express
        const server = express()

        // catch all routes by express and handle it
        server.get('*', (req, res) => {

            loadData();
            console.log('server')
            return handle(req, res)
        })

        // server start
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })


