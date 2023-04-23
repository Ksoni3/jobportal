import mongoose from 'mongoose'

//establishing a connection

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to database')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
