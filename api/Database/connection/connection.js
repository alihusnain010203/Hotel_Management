import mongoose from 'mongoose';

const ConnectDB=async(URL)=>{
    try {
      await mongoose.connect(URL);
        console.log("Connection Connected");

        mongoose.connection.on("disconnected",()=>{
            console.log("Disconnect");
        })
        mongoose.connection.on("connected",()=>{
            console.log("Connected");
        })
    } catch (error) {
        console.log("Something went wrong" ,error);
    }
}

export default ConnectDB;