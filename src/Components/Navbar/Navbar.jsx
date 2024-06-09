import React from 'react'
import "./navbar.css"
import logo from "../../Images/logo1-free-img-140x47 (1).png"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='nav_main d-flex justify-content-between align-items-center'>
           <div className='nav_logo d-flex justify-content-evenly align-items-center '>
                  <a className='text-light'>
                    <img src={logo} alt='logo'></img>
                  </a>
                  <NavLink className='text-light'>
                    EVERYTHING
                  </NavLink>
                  <NavLink className='text-light'>
                    WOMEN
                  </NavLink>
                  <NavLink className='text-light'>
                  MEN
                  </NavLink>
                  <NavLink className='text-light'>
                    ACCESORIES
                  </NavLink>
           </div>
           <div className='nav_logo2 d-flex justify-content-evenly align-items-center'>
                   <NavLink className='text-light'>
                    ABOUT
                   </NavLink>
                   <NavLink className='text-light'>
                    CONTACT US
                   </NavLink>
                   <NavLink className='text-light'>
                   $0.00
                   <i class="fas fa-shopping-bag fa-lg text-light ms-2"></i>
                   </NavLink>
                   <NavLink>
                   <i class="fas fa-user fa-lg text-light"></i>
                   </NavLink>
           </div>

        </div>
    </>
  )
}

export default Navbar