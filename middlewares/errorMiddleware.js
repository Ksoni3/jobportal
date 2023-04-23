//error middleware || next fnction

const errorMiddleware = (err, req, res, next) => {
  console.log(err)

  //create a default error

  const defaultErrors = {
    statusCode: 500,
    message: err,
  }

  //mssing filled error

  if (err.name === 'ValidationError') {
    defaultErrors.statusCode = 400
    defaultErrors.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  //duplicate error
  if (err.code && err.code === 11000) {
    defaultErrors.status = 400
    defaultErrors.message = `${Object.keys(
      err.keyValue,
    )} field has to be unique`
  }

  res.status(defaultErrors.statusCode).json({
    message: defaultErrors.message,
  })
}

export default errorMiddleware
