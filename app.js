const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')

const routes = require('./routes')
const middleware = require('./middleware')

const app = express()
const port = 3000

app.use(bodyParser.json());


app.use((req, res, next) => {
    middleware(req, res, next)
});

app.use('/', routes)

mongoose.connect("mongodb://localhost:27017/ecommerce", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB connected")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})