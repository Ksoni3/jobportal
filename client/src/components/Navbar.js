import React, {useState} from 'react'
import '../styles/navbar.scss'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {

  
  const [isToggle, setIsToggle] = useState(false)

  const closeMenu = ()=>{
    setIsToggle(!isToggle)
    
  }

  return (
    <div className="nav-wrapper">
      <div className='logo-wrapper'>
      <AiFillAlipayCircle className='logo' style={{ color: 'crimson' }} />
      <h1> Job_</h1><span>Portal</span>
      </div>
      <ul className='largescreen-navbar'>
        <li>
          <Link to="/" className='link'>Home </Link>
        </li>
        <li>
          {' '}
          <Link to="/register" className='link'>Job Search </Link>
        </li>
        <li>
          {' '}
          <Link to="/dashboard" className='link'>My Dashboard</Link>
        </li>
        <li>
          {' '}
          <Link to="/login" className='link'>Log In</Link>
        </li>
        <li>
          {' '}
          <Link to="/register" className='link' >Register</Link>
        </li>
      </ul>

      <ul className='mobilescreen-navabar' style={{ display: !isToggle ? 'none' : 'flex' }}>
        <li>
          <Link to="/" className='link' onClick={closeMenu}>Home </Link>
        </li>
        <li>
          {' '}
          <Link to="/register" className='link' onClick={closeMenu}>Job Search </Link>
        </li>
        <li>
          {' '}
          <Link to="/dashboard" className='link' onClick={closeMenu}>My Dashboard</Link>
        </li>
        <li>
          {' '}
          <Link to="/login" className='link' onClick={closeMenu}>Log In</Link>
        </li>
        <li>
          {' '}
          <Link to="/register" className='link' onClick={closeMenu}>Register</Link>
        </li>
      </ul>

      <div onClick={()=>setIsToggle(!isToggle)}>
      {
        isToggle ? <AiOutlineClose className='outline-menu'  /> : <AiOutlineMenu className='outline-menu'  />
      }
      </div>

    </div>
  )
}

export default Navbar
