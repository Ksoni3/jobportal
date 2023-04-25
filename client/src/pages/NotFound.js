import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
    <h1> No page found </h1>
    <Link to= '/'> <button> Go back to home page </button></Link>
    </div>
  )
}

export default NotFound