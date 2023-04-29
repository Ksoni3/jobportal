import React, { useState } from 'react'
import Input from '../components/Input'
import '../styles/login.scss'

const LogIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(loginInfo.email)
    setLoginInfo({
      email: '',
      password: '',
    })
  }

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h1> Welcome back !!!</h1>
      <p>Log In</p>
      <div className="login-wrapper">
        <Input
          title="Email"
          name="email"
          value={loginInfo.email}
          handleChange={handleChange}
        />
        <Input
          title="Password"
          name="password"
          value={loginInfo.password}
          handleChange={handleChange}
        />
      </div>
      <a href="#"> Forgot your password?</a>
      <button type="submit"> Log In</button>
      <div className="signup-wrapper">
        <label> Don't have an acccount ?</label>
        <a href="#"> Sign up?</a>
      </div>
    </form>
  )
}

export default LogIn
