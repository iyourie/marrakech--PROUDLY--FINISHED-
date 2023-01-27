const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const theUserModel = mongoose.model('users', userSchema)
module.exports = theUserModel