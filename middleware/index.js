const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const mongoose = require("mongoose");
module.exports =(req,res,next)=> {
    console.log("Middleware is working 11112222")
    next();
    /*mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        res.send("MongoDB connected 111222133")
    })*/
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
