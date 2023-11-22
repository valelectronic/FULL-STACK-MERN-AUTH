import  Jwt  from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../model/usersModel.js";

const protect = expressAsyncHandler(async(req, res, next)=>{
    let token;
    token = req.cookies.jwt
    if(token){
        try {
            const decoded = Jwt.verify(token, process.env.jwt_SECRET);
            req.user = await User.findById(decoded.userId).select('-password')
            next()
            
        } catch (error) {
            res.status(401)
            throw new Error('not authorized, invalid token ')
            
        }
    }else{
        res.status(401)
        throw new Error('not authorized, no token ')
    }
})

export {protect}