import express, { json } from 'express';
import { config } from 'dotenv';
import ConnectDB from './Database/connection/connection.js';
import Authrouter from './Routes/authentication.js';
import Hotelrouter from './Routes/hotels.js';
import Roomrouter from './Routes/rooms.js';
import Userrouter from './Routes/user.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app=express();
config();

ConnectDB(process.env.MONGO);

// Middlewares
app.use(cookieParser());
app.use(json());
app.use(cors());
app.use('/authentication',Authrouter);
app.use('/user',Userrouter);
app.use('/hotels',Hotelrouter);
app.use('/rooms',Roomrouter);


app.use((err,req,res,next)=>{
    const errstatus=err.status||500;
    const errmessage=err.message||"Something went wrong"
    return res.status(errstatus).json({
        success:false,
        status:errstatus,
        messege:errmessage,
        stack:err.stack
    })
})
app.listen(1800,()=>{
    console.log("Server started");
});