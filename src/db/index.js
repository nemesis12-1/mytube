import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const connectDB = async () => {

    try {
        const connectionInsatnce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !! DM HOST: ${connectionInsatnce.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}