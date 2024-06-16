require('dotenv').config()
const express = require('express')
const userRoutes = require('./Routes/users')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//Routes
app.use('/api/users/',userRoutes)


//connect to database
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port ",process.env.PORT)
    })
    })
    .catch((error)=>{
        console.log(error)
    })





