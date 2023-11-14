import      Express  from "express";
import Dotenv  from "dotenv"
Dotenv.config();
import { notFound,errorHandler } from "./middleware/ErrorMiddleware.js";
import connectDB from "./config/db.js";
const port  = process.env.PORT || 500
import userRoutes from './routes/userRoutes.js'

connectDB()
const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

app.use('/api/users', userRoutes)

app.get('/' , (req,res)=> res.send('server is ready'))

app.use(notFound)
app.use(errorHandler)
app.listen(port, ()=> console.log(`server started on port ${port}`))

// stopped at 49:16
