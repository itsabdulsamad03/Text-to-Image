import mongoose from "mongoose";

const ConnectDB = async ()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("Database connected")
    })

    mongoose.connection.on('error', ()=>{
        console.log("connection error: ", err);
    })

    await mongoose.connect(`${process.env.MONGO_URI}/imagify`)
}

export default ConnectDB;