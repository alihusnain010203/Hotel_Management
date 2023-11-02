import User from '../Database/Models/UserSchema.js';
//Update

export const updateUser=async(req,res,next)=>{
    try {
        const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser);
    
    } catch (error) {
        next(error)
    }
    }

    // Delete

export const deleteUser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Deleted"})
    } catch (error) {
        next(error)
    }
    }
// getOne
export const getOneUser=async(req,res,next)=>{
    try {
        const findUser=await User.findById(req.params.id);
        res.status(200).json(findUser)
    } catch (error) {
        next(error)
    }
    }

    // getall

export const getAllUser=async(req,res,next)=>{
    try {
        const findUsers=await User.find();
        res.status(200).json(findUsers)
    } catch (error) {
        next(error)
    }
    }