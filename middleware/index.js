const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const mongoose = require("mongoose");
module.exports =(req,res,next)=> {
    console.log("Middleware is working 1111")
    mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        res.send("MongoDB connected")
    })
    /*if(req.header('Authorization') != undefined){
        jwt.verify(req.header('Authorization').split(' ')[1], process.env.JWT_SECRET_KEY, (err, authData) => {
            if (err) {
                res.json({message: "Token is invalid",token:req.header('Authorization')} )
            }else {
                Customer.findById(authData.data[0]._id).then(data => {
                    console.log("Customer is verified")
                    next();
                })
            }
        })
    }else{
        res.json({message: "Token is invalid",token:req.header('Authorization')} )
    }*/

}
