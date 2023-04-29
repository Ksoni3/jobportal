import React from 'react'
import '../styles/input.scss'

const Input = (props) => {
    const {title, name,value, handleChange} = props;
  return (
    <div className='input-wrapper'>
    <label>{title}</label>
    <input type="text" name={name} placeholder= {`Your ${name}`} value = {value} onChange={handleChange} />
  </div>
  )
}

export default Input