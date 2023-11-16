
import mongoose, {mongo} from "mongoose";

const connecting = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
        
    }
}

export default connecting