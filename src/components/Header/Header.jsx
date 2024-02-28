import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav>
   
        <li><Link to="/" >Home</Link></li>
        <li><Link to="about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        {/* <li><Link to="/user/:name" >User</Link></li> */}
        <li><Link to="/github" >Github</Link></li>
        
    </nav>
    </>
  )
}

export default Header