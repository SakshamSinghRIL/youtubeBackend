import express from "express"

import cors from "cors"
import cookieParser from "cookie-parser"  // brower cookie use and set

const app = express()
app.use(cors({
    origin : process.env.CORS_ORIGIN,  // from which url we want request
    credentials: true
}))

app.use(express.json({limit: "20kb"})) // maximum size of json
app.use(express.urlencoded({  // to take valules from url
    extended: true,
    limit: "20kb"
}))

app.use(express.static("public")) // to set value or store in public folder
 
app.use(cookieParser())
export { app }