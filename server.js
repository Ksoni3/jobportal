//packages imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
import 'express-async-errors'

//file imports
import connectDB from './config/db.js'
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'
import errorMiddleware from './middlewares/errorMiddleware.js'

//importing helemt package
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitise from 'express-mongo-sanitize'

// Dot env config
dotenv.config()

//mongodb connection
connectDB()

//rest object
const app = express()

// middlewares

app.use(helmet())
app.use(xss())
app.use(mongoSanitise())
app.use(express.json())

//using cors
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/job', jobsRoutes)

//validation middleware
app.use(errorMiddleware)

//listen
app.listen(8080, () => {
  console.log(
    `Server is  Running on ${process.env.DEV_MODE} on port 8080`.bgCyan.white,
  )
})
