import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        DRS
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </header>
  )
}

export default Navbar