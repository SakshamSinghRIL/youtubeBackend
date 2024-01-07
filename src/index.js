//require('dotenv').config({ path : './env'})

import dotenv from "dotenv"

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})


connectDB() // async function always return a promise
.then(()=>{
  app.on("error",(error)=>{
    console.log("ERROR express",error);
    throw err
  })
   app.listen(process.env.PORT || 8000,()=>{
       console.log(`server is listening on port : ${process.env.PORT}`)
   })
})
.catch((err)=>{
  console.log("Mongo db connection failed",err);
})




/*

one approach

// ;(()=>{   // IIFE  function
//     console.log("Hello")

// })();
import express from "express"
const app = express()
( async ()=> {                             // IIFE  function, semicolon in front to avoid errors if before it is missed
          try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error)=>{         // listeners
              console.log("Error",error); 
              throw error  // generally use for unknown erroe
            })
              app.listen(process.env.PORT,() =>{
                console.log(`APP is listing to port ${process.env.PORT}`)
              })

          } catch (error) {
            console.error("ERROR",error);
            throw err
          }
})();

*/