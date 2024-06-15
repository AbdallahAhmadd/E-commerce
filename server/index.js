const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')



const app = express

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/E-Commerce')

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("server is running")
})
