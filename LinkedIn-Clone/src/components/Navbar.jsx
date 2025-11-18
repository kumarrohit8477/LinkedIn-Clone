import React from 'react'
import './Navbar.css'

const Navbar = () => {
   return (
      <div className="header">
         <div className="logo">
            <span className="logo-text">Linked</span>
            <span className="logo-in">in</span>
         </div>

         <div className="nav-buttons">
            <button className="sign-in">Sign in</button>
            <button className="join-now">Join now for free</button>
         </div>
      </div>
   )
}

export default Navbar
