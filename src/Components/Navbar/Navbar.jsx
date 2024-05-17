import React from 'react'
import "./navbar.css"
import logo from "../../Images/logo1-free-img-140x47 (1).png"
import { useSelector } from 'react-redux'
const Navbar = () => {
  return (
    <>
        <div className='nav_main d-flex justify-content-between align-items-center'>
           <div className='nav_logo d-flex justify-content-evenly align-items-center '>
                  <a className='text-light'>
                    <img src={logo} alt='logo'></img>
                  </a>
                  <a className='text-light'>
                    EVERYTHING
                  </a>
                  <a className='text-light'>
                    WOMEN
                  </a>
                  <a className='text-light'>
                  MEN
                  </a>
                  <a className='text-light'>
                    ACCESORIES
                  </a>
           </div>
           <div className='nav_logo2 d-flex justify-content-evenly align-items-center'>
                   <a className='text-light'>
                    ABOUT
                   </a>
                   <a className='text-light'>
                    CONTACT US
                   </a>
                   <a className='text-light'>
                   $0.00
                   <i class="fas fa-shopping-bag fa-lg text-light ms-2"></i>
                   </a>
                   <a>
                   <i class="fas fa-user fa-lg text-light"></i>
                   </a>
           </div>

        </div>
    </>
  )
}

export default Navbar