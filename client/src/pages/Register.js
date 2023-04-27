import React from 'react'
import '../styles/register.scss'

const Register = () => {
  return (
    <div className='register-container'>
       <h1> Register Now !!!!</h1>
       
       <form>
        <div>
        <label> First Name: </label>
        <input type='text' placeholder='Your name'/>
        </div>
        
        <div>
        <label> Last Name: </label>
        <input type='text' placeholder='Your Last Name'/>
        </div>

        <div>
        <label> Email: </label>
        <input type='text' placeholder='Your Email'/>
        </div>

        <div>
        <label> Password: </label>
        <input type='text' placeholder='Your Password'/>
        </div>
        <button> Submit</button>
       </form>


    </div>
  )
}

export default Register