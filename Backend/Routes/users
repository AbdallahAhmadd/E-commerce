const express = require('express');
const router  = express.Router();
const {createUser,getUsers,getUser,deleteUser,updateUser} = require('../Controllers/userController')

//get all users
router.get('/',getUsers)

//get a single user
router.get('/:id',getUser)

//post a new workout
router.post('/',createUser)

//a delete  new workout
router.delete('/:id',deleteUser)

//update  new workout
router.patch('/:id',updateUser)


module.exports = router;