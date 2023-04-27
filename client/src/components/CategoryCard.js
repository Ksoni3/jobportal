import React from 'react'
import '../styles/categorycard.scss'
import { FaStar } from 'react-icons/fa'

const CategoryCard = ({ item }) => {
  return (
    <div className="cc-container" style={{ backgroundColor: item.color }}>
      <div className="cc-wrapper" style={{ backgroundColor: item.color }}>
        <FaStar />
        <h2>{item.title}</h2>
      </div>
      <h2>{item.title}</h2>
      
    </div>
  )
}

export default CategoryCard
