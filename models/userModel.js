import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, 'Password in required'],
      minLength: [6, 'Password length should  be greater than 6'],
      select: true,
    },
    location: {
      type: String,
      default: 'Sydney',
    },
  },
  { timestamps: true },
)
//middlewwares

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

//compare password

userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password)
  return isMatch
}

//json web token''

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}
export default mongoose.model('User', userSchema)