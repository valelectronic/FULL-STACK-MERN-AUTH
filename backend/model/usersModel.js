import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

} , {
    timestamps: true
})
// hashing the password
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.match = async function (entered){
    return await bcrypt.compare(entered, this.password);
}
const User = mongoose.model('user', userSchema)
export default User