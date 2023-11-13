import  Express  from "express";
import { authUser } from "../controllers/userController.js";
const router = Express.Router()

router.post('/auth', authUser)

export default router
