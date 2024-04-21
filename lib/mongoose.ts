import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Missing MONGODB_URL...");
  if (isConnected) {
    return console.log("Already connected to database...");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devFlow",
    });
    isConnected = true;
    console.log("Successfully connected to database...");
  } catch (error) {
    console.log(error);
  }
};
