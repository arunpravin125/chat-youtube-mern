import express from "express"
import { protectRoutes } from "../middleware/protectRoutes.js"
import { getUsersForSidebar } from "../controllers/User.controller.js"

export const UserRoutes = express.Router()

UserRoutes.get("/",protectRoutes,getUsersForSidebar)