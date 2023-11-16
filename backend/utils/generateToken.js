import  Jwt  from "jsonwebtoken";

const generateToken = (res, userId)=>{
    const token = Jwt.sign({userId},process.env.Jwt_SECRET,{
        expiresIn: '15d'
    });
    res.cookie('jwt', token, {
        httpOnly:true,
        secure : process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 15*24*60*60*1000
    })

}
export default generateToken