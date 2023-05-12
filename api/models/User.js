import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    },
    resetToken:{
        type:String,
        unique:true
    }
},
    {timestamps:true}
);

export default mongoose.model("User",userSchema);