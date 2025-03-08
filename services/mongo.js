import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected...");
    return conn;
  } catch (error) {
    console.log(error);
  }
}
