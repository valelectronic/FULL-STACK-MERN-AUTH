   import asyncHandler from 'express-async-handler'
   //@desc Auth user/set token
 //route post/api/users/auth
 //@access public 

 const authUser =asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'authorize user'})
}
 )
export {
    authUser
}