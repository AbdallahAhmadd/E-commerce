const { default: mongoose } = require('mongoose')
const userModel = require('../Models/UserModel')
const mangoose = require('mongoose')

//get all users
const getUsers = async(req,res)=>{
    const users = await userModel.find({}).sort({createdAt:-1})
    res.status(200).json(users)
}


//get a single user
const getUser = async(req,res)=>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such User'})
    }
    const user = await userModel.findById(id)

    if(!user){
        return res.status(404).json({error:'user is not here'})
    }

    res.status(200).json(user)
}

//create a new user
const createUser = async(req,res)=>{
    const{firstName,lastName,email,password}= req.body

    //add doc to db
    try{
        const user = await userModel.create({
            name: { firstName, lastName },
            email,
            password
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.mssg})
    }
}

//delete a user


//update user info

module.exports={
    createUser,
    getUsers,
    getUser
}