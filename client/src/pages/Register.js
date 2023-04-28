import React, { useState } from 'react'
import '../styles/register.scss'

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    name: 'kamal',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(registerInfo)
    setRegisterInfo({
      name: 'kamal',
      email: '',
      password: '',
    })
    // submit form data to the server here
  }

  return (
    <div className="register-container">
      <h1>Register Now !!!!</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input type="text" value={registerInfo.name} name="name" placeholder="Your name" onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" value={registerInfo.email}name="email" placeholder="Your Email" onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={registerInfo.password} name="password" placeholder="Your Password" onChange={handleChange} />
        </div>

        <div>
          <input type="checkbox" id="terms" />
          <span htmlFor="terms">I have read license and all the terms and conditions</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
