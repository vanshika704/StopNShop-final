import mongoose from "mongoose";
import { Db_Name } from "../constants/constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI+Db_Name);
    console.log("🟢 MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;