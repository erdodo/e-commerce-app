const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer.js')
var jwt = require('jsonwebtoken');
//login
router.post('/', (req, res) => {
    Customer.find({email: req.body.email, password: req.body.password}).then(data => {
        if (data.length == 0) {
            res.json({message: "Email or password is incorrect"})
        }else {
            jwt.sign({ data }, process.env.JWT_SECRET_KEY,(err, token) => {
                updateToken(data[0], token).then(()=>{
                    res.json({
                        token:token,
                        customer: data
                    });
                })
            });
        }
    }).catch(err => {
        res.json({message: err})
    })
})

router.post('/verify', (req, res) => {
    if(req.header('Authorization').split(' ')[1] != "null"){
        jwt.verify(req.header('Authorization').split(' ')[1], process.env.JWT_SECRET_KEY, (err, authData) => {
            if (err) {
                res.json({message: "Token is invalid",token:req.header('Authorization')} )
            }else {
                Customer.findById(authData.data[0]._id).then(data => {
                    res.json({
                        message: "Token is valid",
                        user: data
                    })
                })
            }
        })
    }else{
        res.json({message: "Token is invalid",token:req.header('Authorization')} )
    }
})

const updateToken = async (data, token) => {
    let tokenArray = data.token
    tokenArray.push(token)
    await Customer.updateOne({_id: data._id}, {token: tokenArray})
}

module.exports = router