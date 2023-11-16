   import asyncHandler from 'express-async-handler'
import User from '../model/usersModel.js'
import generateToke from '../utils/generateToken.js'

   //@desc Auth user/set token
 //route post  /api/users/auth
 //@access public 

 const authUser =asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'authorize user'})
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
   }
   // creating the users
   const user =await User.create({
      name,
      email,
      password
   })
   if(User){
      generateToke(res,user._id)
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
 //route post  /api/users/logOutUser
 //@access public 

 const logOutUser =asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'logged out successfully'})
}
 )
  //@desc get user profile
 //route get  /api/users/profile
 //@access private 

 const getProfile =asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'my profile'})
}
 )

  //@desc update user profile
 //route put /api/users/auth
 //@access private 

 const updateProfile =asyncHandler(async (req, res)=>{
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