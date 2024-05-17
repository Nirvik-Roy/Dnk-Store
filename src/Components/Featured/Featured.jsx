import React, {  useEffect, useState } from 'react'
import "./Featured.css"
import Shoe from "../../Images/sports-shoe1-300x300.jpg"
import axios from "axios"
import { NavLink,Link, useNavigate } from 'react-router-dom'
import API_DATA from '../../Api'


const Featured = () => {
    
    
    const [Featured,setFeatured]=useState([])
    const API=API_DATA;
    console.log(API)
    


    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  
//  const url="https://api.escuelajs.co/api/v1/products"

// //  const url = 'https://shopeasee.vercel.app/api/products'

    // const featuredProducts=async(api)=>{
    //     const res=await axios.get(api)
    //     const data=res.data
    //     setFeatured(data)
    //     console.log(data)
    //  }
    

const featuredProducts=()=>{
    const featuredata=API.filter((ele)=>{
             return ele.special==true
    })
   
    setFeatured(featuredata)
       
   
}


 useEffect(()=>{
    featuredProducts()
 }, [])
 console.log(Featured)

  return (
    <>
    <div className='featured_main'>
    <div className='featured_head_div'>
        <h1 className='text-center featured_heading'>Featured Products</h1>
    </div>
    <div className='featured_products_main d-flex justify-content-center align-items-center'>
        <div className='featured_divs_main row'>
          

           {Featured.map((element,index)=>{
                return(<>
                    <div className='featured_div col-2' key={index}>
                <div className='featured_img_div'>
                    <img className='featured_img'src={element.image} alt='Product Image' ></img>
                </div>
                <div className='featured_details_div mt-3'>
                 <Link to={`/singleproduct/${element.id}`} className="link"><p className='featured_title mb-0'>{element.title}</p></Link> 
                    <p className='mb-0'>{element.category}</p>
                    <p className='featured_price'>${element.price}</p>
                </div>
                <div className='color_div'>

                    {element.color.map((e)=>(
                      
                        <button className='button' style={{backgroundColor:e}}></button>
                    )
                    )}

                </div>
            </div>
                </>)
            }
           )}
           

           
        </div>
    </div>
</div> 
</>  )
  
}

export default Featured;

