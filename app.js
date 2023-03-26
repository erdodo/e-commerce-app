const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json());

const routes = require('./routes')
app.use('/', routes)

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB connected")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})