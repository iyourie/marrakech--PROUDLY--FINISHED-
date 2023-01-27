const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://iyourie:lNr13sUEMqWSnhDq@cluster0.alraqom.mongodb.net/FirstDataBase?retryWrites=true&w=majority')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();

const Stripe = require('stripe')(process.env.SECRET_KEY);


const priceModel = require('./models/Price')




app.post('/price', async (req, res) => {
    const price = req.body
    const newPrice = new priceModel(price)
    await newPrice.save()

    res.json(price)
})


app.get('/payments', (req, res) => {
    priceModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.delete('/deletePrice', (req, res) => {
    priceModel.findOneAndDelete({}, (err, data) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Data successfully deleted",
        };
        return res.status(200).send(response);
    });
});


app.post('/payment', async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'MAD',
        });
        status = 'success';
    } catch (error) {
        console.log(error);
        status = 'Failure';
    }
    res.json({ error, status });
});






app.listen(3001, () => {
    console.log('yes , good');
})