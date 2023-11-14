import  Express  from "express";
import { authUser,
    registerUser,
    logOutUser,
    getProfile,
    updateProfile } from "../controllers/userController.js";


const router = Express.Router()

router.post('/register', registerUser)
router.post('/auth', authUser)
router.post('/logout', logOutUser)
router.route('/profile').get(getProfile).put(updateProfile)

export default router
