const express = require('express')
const bodyParser = require('body-parser')

const personRouter = require('./routes/customer')
const meetupRouter = require('./routes/movie')

require('./mongo-connection')

const app = express()

const cors = require('cors') // access data
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/customer', personRouter)
app.use('/movie', meetupRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
