import express from "express"
import { getMessage, sendMessage } from "../controllers/message.controller.js"
import { protectRoutes } from "../middleware/protectRoutes.js"

export const  messageRouter = express.Router()

messageRouter.post("/send/:id",protectRoutes,sendMessage)
messageRouter.get("/:id",protectRoutes,getMessage)