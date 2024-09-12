import path from "path"
import express from 'express'
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import { connectToMongo } from './db/connectToMongooseDB.js'
import { messageRouter } from './routes/message.routes.js'

import cookieParser from 'cookie-parser'
import { UserRoutes } from './routes/user.routes.js'
import {app,server} from './socket/socket.js'
// const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
dotenv.config()

const usePort = process.env.PORT || 4501

const __dirname = path.resolve()

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRouter)
app.use("/api/users",UserRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","disk","index.html"))
})

// app.listen(usePort,()=>{
//     connectToMongo()
//     console.log(`server started...${usePort}`)

// })
server.listen(usePort,()=>{
    connectToMongo()
    console.log(`server started...${usePort}`)

})