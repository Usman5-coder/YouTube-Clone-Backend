import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/db.js";

connectDB()
  .then(() => {
     app.listen(process.env.PORT || 8000, () => {
        console.log(`YOur server is listened on port: ${process.env.PORT}`);
     })
  })
  .catch((error) => {
    console.log("MONGO DB Connection ERROR~~~~~~~~~~~~~:", error);
  });





















// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     console.log(`Connected to ${DB_NAME}`)
//   } catch (error) {
//     console.error("ERROR:" , error);
//     throw error;
//   }
// })();
