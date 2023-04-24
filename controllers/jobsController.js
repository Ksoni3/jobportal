import jobsModel from '../models/jobsModel.js'

export const createJobController = async (req, res, next) => {
  const { company, position } = req.body
  if (!company || !position) {
    next('Both field are required')
  }

  req.body.createdBy = req.user.userId
  const job = await jobsModel.create(req.body)
  res.status(201).json({ job })
}

//get jobs

export const getAllJobsController = async (req, res, next) => {
  const { status, workType, search, sort } = req.query
  //conditions for searching fitlters

  const queryObject = {
    createdBy: req.user.userId,
  }

  //logic filters

  if (status && status !== 'all') {
    queryObject.status = status
  }

  if (workType && workType !== 'all') {
    queryObject.workType = workType
  }

  if (search) {
    queryObject.position = { $regex: search, $options: 'i' }
  }

  let queryResult = jobsModel.find(queryObject)

  //sorting

  if (sort == 'latest') {
    queryResult = queryResult.sort('-createdAt')
  }
  if (sort == 'oldest') {
    queryResult = queryResult.sort('createdAt')
  }
  if (sort == 'a-z') {
    queryResult = queryResult.sort('position')
  }
  if (sort == 'z-a') {
    queryResult = queryResult.sort('-position')
  }

  //pagination

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit
  queryResult = queryResult.skip(skip).limit(limit)

  //job count
  const totalJobs = await jobsModel.countDocuments(queryResult)
  const numOfPage = Math.ceil(totalJobs / limit)

  const jobs = await queryResult
  // const jobs = await jobsModel.find({ createdBy: req.user.userId })

  // get all jobs created by user
  res.status(200).json({
    success: true,
    totalJobs,
    jobs,
    numOfPage,
  })
}

//update job

export const updateJobController = async (req, res, next) => {
  const { id } = req.params

  const { company, position } = req.body

  if (!position || !company) {
    next('Enter both fields')
  }

  //find job

  const job = await jobsModel.findOne({ _id: id })

  //validation

  if (!job) {
    next(`no jobs found with this ${id}`)
  }

  if (!req.user.userId === job.createdBy.toString()) {
    next(
      `You are not authorised ${
        req.user.userId
      } and ${job.createdBy.toString()}`,
    )
  }
  const updateJob = await jobsModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidator: true,
  })

  res.status(200).json({
    updateJob,
  })
}

// delete

export const deleteJobController = async (req, res, next) => {
  const { id } = req.params

  const job = await jobsModel.findOne({ _id: id })

  if (!job) {
    next(`no job found with this ${id}`)
  }

  if (!req.user.userId === job.createdBy.toString()) {
    next('you are  not authorised')
    return
  }

  await job.deleteOne()
  res.status(200).json({
    success: true,
    message: 'jobs deleted',
  })
}
