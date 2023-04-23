import express from 'express'
import {
  registerController,
  logInController,
} from '../controllers/authController.js'

const router = express.Router()

//routes

router.post('/register', registerController)

router.post('/login', logInController)

export default router
