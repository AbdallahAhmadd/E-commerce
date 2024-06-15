require('dotenv').config()
const express = require('express')


//express app
const app = express()


//Routes
app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to the home page"})
})

//listen for requests
app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT)
})


