import userModel from '../models/userModel.js'

export const updateUserController = async (req, res) => {
  const { name, email, lastName, location } = req.body
  if (!name || !email || !lastName || !location) {
    return next('Please provide all fields')
  }

  const user = await userModel.findOne({ _id: req.user.userId }) //userId is in tokens payload
  user.name = name
  user.lastName = lastName
  user.email = email
  user.location = location

  await user.save()
  const token = user.createJWT()
  res.status(200).json({
    user,
    token,
  })
}
