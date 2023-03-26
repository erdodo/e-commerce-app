const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");

module.exports = (req, res, next) => {
    console.log("Customer Middleware is working");
    next();
}