const express = require('express')
const router = express.Router()

const customer = require('./customer')
router.use('/customer', customer )

module.exports = router