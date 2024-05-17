import React from 'react'
import "./home.css"
import Logos from '../Logo/Logos'
import Featured from '../Featured/Featured'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import ScrollTop from '../../ScrollTop'
const Home = () => {
  

  return (

    <>
        <Navbar/>
        <ScrollTop/>
        <div className='main_div'>
            <div className='intro_main'>
              <div className='head-div'>
                <h1 className='head1'>Raining Offers For</h1>
              </div>
              <div className='head_div2'>
                <h1 className='head2'>Hot Summer!</h1>
              </div>
              <div className='head_div3'>
                <h3 className='head3'>25% Off On All Products</h3>
              </div>
              <div className='btn_div d-flex justify-content-between'>
                <button className='btn btn1 btn-light'>SHOP NOW</button>
                <button className='btn btn2 btn-light bg-transparent'>FIND MORE</button>
              </div>
            </div>
        </div>
        <Logos/>
        <Featured/>
    </>
  )
}

export default Home