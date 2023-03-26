const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 15,
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        type: String,
    },
    token: {
        type: Array,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    login_at: {
        type: Date,
    }
})
module.exports = mongoose.model('Post', PostSchema)