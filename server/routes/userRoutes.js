import express from 'express'
import {registerUser, LoginUser, userCredits} from '../controllers/userController.js'
import userauth from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', LoginUser)
userRouter.post('/credits', userauth, userCredits)

export default userRouter
