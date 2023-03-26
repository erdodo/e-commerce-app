const express = require('express')
const router = express.Router()

const customer = require('./customer')
const login = require('./login')


router.use('/customer', customer )
router.use('/login', login )

module.exports = router