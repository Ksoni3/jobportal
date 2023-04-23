import express from 'express'
import { testPostController } from '../controllers/testController.js'
import userAuth from '../middlewares/authMiddleware.js'

// route object
const router = express.Router()

// routes
router.post('/test-post', userAuth, testPostController)

export default router
