const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer.js')

//List all customers
router.get('/', (req, res) => {
    const customer = Customer.find().then(data => {
        res.json(data)
    })
})

//List one customer
router.get('/:id', (req, res) => {
    const customer = Customer.findById(req.params.id).then(data => {
        res.json(data)
    })
})

//Create a customer
router.post('/', (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        surname: req.body.surname,
        image: req.body.image,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        settings: req.body.settings,
        token: req.body.token,
    })
    customer.validateSync();
    const errors = customer.errors
    if (errors) {
        res.json({message: errors})
    }else {
        customer.save().then(data => {
            res.json(data)
        }).catch(err => {
            res.json({message: err})
        })
    }
})

//Delete a customer
router.delete('/:id', (req, res) => {
    Customer.deleteOne({_id: req.params.id}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err})
    })
})

//Update a customer
router.patch('/:id', async (req, res) => {
    const customer  = new Customer({
        name: req.body.name,
        surname: req.body.surname,
        image: req.body.image,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        settings: req.body.settings,
        token: req.body.token
    })
    customer.validateSync()
    const errors = customer.errors
    if (errors) {
        res.json({message: errors})
    }
    else {
        Customer.updateOne(
            {_id: req.params.id},
            {$set: {
                    name: req.body.name,
                    surname: req.body.surname,
                    image: req.body.image,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                    settings: req.body.settings,
                    token: req.body.token
                }})
            .then(data => {
                res.json(data)
            }).catch(err => {
            res.json({message: err})
        })
    }
})

module.exports = router