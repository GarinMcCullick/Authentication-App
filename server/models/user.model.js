const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
}, {collection: 'user-data'})

const model = mongoose.model('UserData', User)

module.exports = model