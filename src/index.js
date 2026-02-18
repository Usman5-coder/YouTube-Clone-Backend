import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import connectDB from './db/db.js'
 

connectDB()



// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     console.log(`Connected to ${DB_NAME}`)
//   } catch (error) {
//     console.error("ERROR:" , error);
//     throw error;
//   }
// })();
