   import asyncHandler from 'express-async-handler'
import User from '../model/usersModel.js'
import generateToke from '../utils/generateToken.js'
import { Error } from 'mongoose'
import generateToken from '../utils/generateToken.js'

   //@desc Auth user/set token
 //route post  /api/users/auth
 //@access public 

 const authUser =asyncHandler(async (req, res)=>{
   const {email, password} = req.body

   const user = await User.findOne({email})
   if(user && (await user.match(password))){
      generateToke(res,user._id)
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email
      })
   }else{
      res.status(401)
      throw new Error('invalid email or password')
   }

}
 )

  //@desc register a new user
 //route post  /api/users/registerUser
 //@access public 

 const registerUser =asyncHandler(async (req, res)=>{
   const {name,email,password} = req.body
   // checking if email already exists
   const userExists = await User.findOne({email})
   if(userExists){
      res.status(400)
      throw new Error('user already exist')
   }else{
      res.status(200).json({message: 'user registered  successfully'})
   }
   // creating the users
   const user =await User.create({
      name,
      email,
      password
   })
   if(User){
      generateToken(res,user._id)
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email
      })
   }else{
      res.status(400)
      throw new Error('invalid credentials')
   }
}
 )

  //@desc logout user
 //route post/api/users/logout
 //@access public 
 const logOutUser =asyncHandler(async (req, res)=>{
   res.cookie('jwt', " ", {
      httpOnly: true,
      expires: new Date(0)
   })
    res.status(200).json({message: 'user logged out successfully'})
}
 )
  //@desc get user profile
 //route get  /api/users/profile
 //@access private 

 const getProfile =asyncHandler(async (req, res)=>{

   const user = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email
   }
    res.status(200).json(user)
}
 )

  //@desc update user profile
 //route put /api/users/profile
 //@access private 

 const updateProfile =asyncHandler(async (req, res)=>{
   const user = await User.findById(req.user._id)
   if(user){
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email

      if(req.body.password){
         user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.status(200).json({
         _id:updatedUser._id,
         name:updatedUser.name,
         email:updatedUser.email
      })

   }else{
      res.status(401)
      throw new Error('user not found')
   }
    res.status(200).json({message: 'updated successfully '})
}
 )
export {
    authUser,
    registerUser,
    logOutUser,
    getProfile,
    updateProfile
}