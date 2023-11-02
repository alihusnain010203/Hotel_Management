import jwt from 'jsonwebtoken';
import throwerror from './error.js';
 export const verifyToken=(req,res,next)=>{


    const token=req.cookies.accessToken;

    if(!token){
        return next(throwerror(400,"You are not authenticated"))
    }

    jwt.verify(token,process.env.PRIVATEKEY,(err,info)=>{
        if(err){
            return next(throwerror(400,"You are not Verfied"))
            
        }
        req.user=info;
        next();
    })
 }
 export const VerifyUser=(req,res,next)=>{
verifyToken(req,res,()=>{
if(req.user.id===req.params.id || req.user.isAdmin){
    next()
}
else{
    next(throwerror(400,"You are not Verfied"))
}
})
 }
 export const VerifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
    if(req.user.isAdmin){
        next()
    }
    else{
        next(throwerror(400,"You are not Verfied"))
    }
    })
     }


