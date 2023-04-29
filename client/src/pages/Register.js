import React, { useState } from 'react'
import '../styles/login.scss'
import Input from '../components/Input'

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
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
      name: '',
      email: '',
      password: '',
    })

  }

  return (
      <form className="login-container" onSubmit={handleSubmit}>
      <h1>Register Now !!!</h1>
     
      <div className="login-wrapper">
        <Input
          title="Name"
          name="name"
          value={registerInfo.name}
          handleChange={handleChange}
        />
        <Input
          title="Email"
          name="email"
          value={registerInfo.email}
          handleChange={handleChange}
        />
        <Input
          title="Password"
          name="password"
          value={registerInfo.password}
          handleChange={handleChange}
        />
      </div>
      <div className='checkbox-wrapper'>
          <input type="checkbox" id="terms" />
          <span htmlFor="terms">I have read license and all the terms and conditions</span>
        </div>
      <button type="submit"> Register </button>
      <div className="signup-wrapper">
        <label> Do you already have an acccount ?</label>
        <a href="#"> Log In Now?</a>
      </div>
    </form>
  )
}

export default Register
