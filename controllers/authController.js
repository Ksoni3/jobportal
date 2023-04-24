import userModel from '../models/userModel.js'

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body
  //validate
  if (!name) {
    return next('name is required')
  }

  if (!email) {
    return next('email is required')
  }

  if (!password) {
    return next('password is required')
  }

  const existingUser = await userModel.findOne({ email })
  if (existingUser) {
    return next('user already exist')
  }

  const user = await userModel.create({ name, email, password })

  //token
  const token = user.createJWT()
  res.status(200).send({
    success: true,
    msg: 'User created successfully',
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  })
}

export const logInController = async (req, res, next) => {
  const { email, password } = req.body

  //validation

  if (!email || !password) {
    next('please provide all fields')
  }

  //find user by email

  const user = await userModel.findOne({ email }).select('+password')
  if (!user) {
    next('Invalid username or password')
  }

  //compare password
  const isPassword = await user.comparePassword(password)
  if (!isPassword) {
    next('Invalid credentials')
  }

  user.password = undefined
  const token = user.createJWT()
  res.status(200).json({
    success: true,
    msg: 'login successful',
    user,
    token,
  })
}
