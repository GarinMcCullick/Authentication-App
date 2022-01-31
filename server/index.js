
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')  //hashing for password

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/authentication-app')

app.post('/api/login', async (req,res) => {

        const user = await User.findOne({ 
            email: req.body.email,
        })

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordValid) {

            const token = jwt.sign({
                email: user.email,
                fname: user.fname,
            }, 'supersecret')

            return res.json({ status: 'ok', user: token, })
        } else {
            return res.json({ status: 'error', user: false })
        }
})


app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: newPassword,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        })
        res.json({ status: 'ok' })
    } catch (err){
        res.json({ status: 'error', error:'there was an error in your information'})
    }
    res.json({ status:'ok'})
})

app.get('/api/getuser', (req, res) => {
    res.json(req.User)
})

app.listen(1337, () => {
    console.log('Server Started on 1337')
})