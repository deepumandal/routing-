import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">navbar </Link>
      <Link to="/about">About </Link>
      <Link to="/product">product </Link>
      <Link to="/products">products </Link>
      
      
      
      
      </div>
  )
}

export default Navbar