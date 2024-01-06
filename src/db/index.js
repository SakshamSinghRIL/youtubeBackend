import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try {
        
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)   // await because db is always in another continent so it will take time to come
          //   connection isnatance will recive the response from await     
          console.log(`/n Mongo COnnection! DB Host ${connectionInstance.connection.host}`)                                                                                    

    } catch (error) {
        console.log("Mongo DB connection Failed",error);
        process.exit(1);


    }
}

export default connectDB