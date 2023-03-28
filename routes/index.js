const express = require('express')
const router = express.Router()

const customer = require('./customer')
const login = require('./login')

router.get('/', (req, res) => {
    res.send('Hello World! merhaba cnm')
})
router.use('/customer', customer )
router.use('/login', login )

module.exports = router