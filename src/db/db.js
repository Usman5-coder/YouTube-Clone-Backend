import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB is Connected Successfully! And the DB host is: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB
