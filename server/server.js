const express = require('express')
const app = express()
const mongoose = require('mongoose')
const theUserModel = require('./models/Users')
mongoose.connect('mongodb+srv://iyourie:lNr13sUEMqWSnhDq@cluster0.alraqom.mongodb.net/dataBase?retryWrites=true&w=majority')
app.use(express.json())

app.get('/getUsers', (req, res) => {
    theUserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})
app.post('/createUser', async (req, res) => {
    const user = req.body
    const newUser = new theUserModel(user)
    await newUser.save()

    res.json(user)
})
app.listen(3001, () => {
    console.log('yes , good');
})