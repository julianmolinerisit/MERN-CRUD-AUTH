 import mongoose from "mongoose";

 const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,

    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    passworld: {
        type: String,
        require: true,
    }

 })

 export default mongoose.model('User', userSchema)