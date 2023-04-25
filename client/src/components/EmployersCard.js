import React from 'react'
import google from '../Assets/Google.png'
import '../styles/employerscard.scss'

const EmployersCard = () => {
  return (
    <div className='ec-container'>
    <img src= {google} alt= '#google'/>
    <h2> Google</h2>
    </div>
  )
}

export default EmployersCard