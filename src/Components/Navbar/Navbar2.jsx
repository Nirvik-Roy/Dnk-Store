import React from 'react'
import logo from "../../Images/logo@2x-free-img.png"
import "./Navbar2.css"
import SingleProduct from '../SingleProduct/SingleProduct'
import Description from '../Description/Description'
import { useSelector } from 'react-redux'
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
                  <a className='text-dark'>
                    EVERYTHING
                  </a>
                  <a className='text-dark'>
                    WOMEN
                  </a>
                  <a className='text-dark'>
                  MEN
                  </a>
                  <a className='text-dark'>
                    ACCESORIES
                  </a>
           </div>
           <div className='nav_logo2 d-flex justify-content-evenly align-items-center'>
                   <a className='text-dark'>
                    ABOUT
                   </a>
                   <a className='text-dark'>
                    CONTACT US
                   </a>
                   <a className='text-dark'>
                   $0.00
                   <i class="fas fa-shopping-bag cart fa-lg text-dark ms-2"><button className='cart_btn'>{data.length}</button></i>
                   </a>
                   <a>
                   <i class="fas fa-user fa-lg text-dark"></i>
                   </a>
           </div>

        </div>
        
    </>
  )
}

export default Navbar2