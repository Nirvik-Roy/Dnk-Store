import React from 'react'
import logo from "../../Images/logo@2x-free-img.png"
import "./Navbar2.css"
import SingleProduct from '../SingleProduct/SingleProduct'
import Description from '../Description/Description'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar2 = () => {
  const data=useSelector((state)=>{
    return state.cart
  })
  console.log(data)

  
  return (
    <>
        <div className='nav_main1 d-flex justify-content-between align-items-center'>
           <div className='nav_logo d-flex justify-content-evenly align-items-center '>
                  <a className='text-dark nav_img_div'>
                    <img className='nav_img' src={logo} alt='logo'></img>
                  </a>
                  <NavLink className='text-dark'>
                    EVERYTHING
                  </NavLink>
                  <NavLink className='text-dark'>
                    WOMEN
                  </NavLink>
                  <NavLink className='text-dark'>
                  MEN
                  </NavLink>
                  <NavLink className='text-dark'>
                    ACCESORIES
                  </NavLink>
           </div>
           <div className='nav_logo2 d-flex justify-content-evenly align-items-center'>
                   <NavLink className='text-dark'>
                    ABOUT
                   </NavLink>
                   <NavLink className='text-dark'>
                    CONTACT US
                   </NavLink>
                   <NavLink className='text-dark'>
                   $0.00
                   <i class="fas fa-shopping-bag cart fa-lg text-dark ms-2"><button className='cart_btn'>{data.length}</button></i>
                   </NavLink>
                   <NavLink>
                   <i class="fas fa-user fa-lg text-dark"></i>
                   </NavLink>
           </div>

        </div>
        
    </>
  )
}

export default Navbar2