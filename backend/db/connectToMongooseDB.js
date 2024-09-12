import mongoose from "mongoose";

export const connectToMongo = async()=>{
   try {
    const connection =await mongoose.connect(process.env.MONGO_URL)
    console.log("mongoose db connected....")
   } catch (error) {
    console.log("error in connection :",error)
   }
}