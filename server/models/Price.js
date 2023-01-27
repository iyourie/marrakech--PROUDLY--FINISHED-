const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    price: {
        type: Number
    }
});

const priceModel = mongoose.model('price', priceSchema)
module.exports = priceModel



