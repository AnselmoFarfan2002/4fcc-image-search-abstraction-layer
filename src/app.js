require('dotenv').config()

const express = require("express")
const morgan = require("morgan")
const pug = require('pug')
const path = require('path')

const app = express()

const routes = require('./routes')
const dbConnection = require('../config/database.conf')

app.use(morgan('dev'))
app.use(routes)
app.use(express.static('views'))

app.set('view engine', 'pug')

app.listen( process.env.APP_PORT, function (err) {
    if (err) console.log(err)
    else console.log("I'm alive 🤑 at port: ", process.env.APP_PORT)
})
