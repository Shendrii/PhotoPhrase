import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return true;
  console.log("process.env.MOGODB_URL");
  try {
    await mongoose.connect(process.env.MOGODB_URL);
    console.log("mongoDB connected successfully");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
