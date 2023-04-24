import express from 'express'
import rateLimit from 'express-rate-limit'
import {
  registerController,
  logInController,
} from '../controllers/authController.js'

//ip limiter

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const router = express.Router()

//routes

router.post('/register', limiter, registerController)

router.post('/login', limiter, logInController)

export default router
