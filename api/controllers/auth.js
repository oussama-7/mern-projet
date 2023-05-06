import User from "../models/User.js";
import bcrypt from "bcryptjs";
import createError from "../utils/error.js";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import cors from 'cors';


export const register= async (req,res,next)=>{
       try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser= new User({
                firstName:req.body.firstName,
                 lastName:req.body.lastName,
                username:req.body.username,
                email:req.body.email,
                password:hash

        })
        try{
                await newUser.save();
        }catch(err){
                

              switch (Object.keys(err.keyPattern)[0]) {
                case "username":
                       return next(createError(404,"Username already exist!"));
                case "email":
                        return next(createError(404,"Email already exist!"));
                default:
              }
              
               
              
        }
        const user= await User.findOne({username:req.body.username});
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin}, process.env.JWT,);
        const {password,isAdmin,...otherDetails}=user._doc;

        res.cookie("access_token",token,).status(200).json({...otherDetails});

       }catch(err){
        next(err);
       }
}
export const login=async(req,res,next)=>{
        try{
            const user= await User.findOne({username:req.body.username});
            if(!user) return next(createError(404,"User not found!"));
            const isPasswordCorrect=await bcrypt.compare(req.body.password, user.password);
            if(!isPasswordCorrect) return next(createError(400,"Wrong password or username!"));
            const token = jwt.sign({id:user._id,isAdmin:user.isAdmin}, process.env.JWT,);
            const {password,isAdmin,...otherDetails}=user._doc;

            res.cookie("access_token",token,).status(200).json({...otherDetails});

            
        }catch(err){
                next(err);
        }
}
export const logout = async (req, res, next) => {
        try {
          res.clearCookie("access_token").status(200).json({ message: "Logged out successfully" });
        } catch (err) {
          next(err);
        }
      };

export const forgotPassword=async(req,res,next)=>{
        const {email}=req.body;
        try{
                const oldUser=await User.findOne({email});
                if(!oldUser){
                       return res.json({status:"User not exist!"});
                }
                const secret=process.env.JWT+oldUser.password;
                const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"1h"});
                const link=`http://localhost:8800/reset-password/${oldUser._id}/${token}`;//this link will be send to user's mail
                console.log(link);

        }catch(err){

        }

};
export const resetPassword=async(req,res,next)=>{
        res.send("well done")
       

};
      