import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { NavLink, useParams } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";
import shoe from "../../Images/sports-shoe1.jpg";
import shoe1 from "../../Images/sports-shoe2-300x300.jpg";
import API_DATA from '../../Api'
import Description from "../Description/Description";
import ScrollTop from "../../ScrollTop";
import { ToastContainer, toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addElement } from "../../Store/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  
  const dispatch=useDispatch()
  const [cartitems,setcartitems]=useState([])
  const [quantity,setquantity]=useState()
  const [color,setcolor]=useState('')
  const [product,setproduct]=useState([])
  const [index,setindex]=useState(0)
  const { id } = useParams();
 
  const api_description=API_DATA;
 
 
  const single_product = ()=>{
    
    const one_product=api_description.filter((element)=>{
         return element.id == id
    })
    setproduct(one_product)
  }
 
  const setindex1 = () =>{
   setindex(0)
  }
  const setindex2 = () =>{
    setindex(1)
   }
   const setindex3 = () =>{
    setindex(2)
   }
   const setindex4 = () =>{
    setindex(3)
   }


useEffect(()=>{
 single_product()
 
},[])
  
  const addItem=(cartitem)=>{
    
   const obj=[{
      id:cartitem.id,
      title:cartitem.title,
      img:cartitem.image,
      quantity:quantity,
      price:cartitem.price,
      color:color,
    }]
    dispatch(addElement(obj))

  
   
       
        
   
   
   

     
    
    toast.info('Item Added To Cart', {
      position: "top-left",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: '',
      theme: "colored",
      transition:Flip,
      });
  }
  const colorId=(element1)=>{
    setcolor(element1)
}

const addQuantity =(event)=>{
 setquantity(event.target.value)
}
  return (
    <>
    <ToastContainer
position="top-left"
autoClose={1400}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition:Flip
/>

    <ScrollTop/>
      <Navbar2 />
      <div className="singleproduct_main d-flex justify-content-around">
      {product.map((e)=>{
          return<>
     
        <div className="left_div ">
          <div className="single_product_main2 d-flex justify-content-center align-items-center">
          
                <div className="product_img_div">
              <img
                className="single_product_img"
                src={e.image[index]}
                alt="Product Image"
              ></img>
            </div>
              

          </div>
          <div className="img_div_contain d-flex justify-content-center">
            <div className="img_div_main d-flex justify-content-evenly">
             
                <div className="img_div" onClick={()=>{
                  setindex1()
                }}>
                
                <img
                  className="single_product_img2"
                  src={e.image[0]}
                  alt="product img"
                ></img>
                
              </div>
              
              <div className="img_div" onClick={()=>{
                  setindex2()
                }}>
              
                <img
                  className="single_product_img2"
                  src={e.image[1]}
                  alt="product img"
                ></img>
              
              </div>
              <div className="img_div" onClick={()=>{
                  setindex3()
                }}>
                <img
                  className="single_product_img2"
                  src={e.image[2]}
                  alt="product img"
                ></img>
              </div>
              <div className="img_div" onClick={()=>{
                  setindex4()
                }} >
                <img
                  className="single_product_img2"
                  src={e.image[3]}
                  alt="product img"
                ></img>
              </div>
              
            </div>
          </div>
        </div>
        
           
        <div className="right_div d-flex justify-content-center">
          <div className="description_main ">
            <div className="description_links">
            
              <NavLink>Home/</NavLink>
              <NavLink>Men/</NavLink>
              <span>{e.title}</span>
            </div>
            <div className="mt-3">
              <p>{e.category}</p>
            </div>
            <div >
              <h2>{e.title}</h2>
            </div>
            <div>
              <h3>
                ${e.price}.00 <small>+Free Shipping</small>
              </h3>
            </div>
            <div className="description_para_div mt-4">
              <p className="description_para">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed. 
              </p>
            </div>
           
            <div className="description_color_div mt-4">
            {e.color.map((element)=>(
              <button onClick={(()=>{
                colorId(element)
              })} className='button1' style={{backgroundColor:element}}></button>
            ))}
              
              
            </div>

            <hr className="mt-5"/>
            <div className="description_cart_div ">
              <input onChange={((event)=>{
                addQuantity(event)
              })} placeholder={0} type="number" id="amount" min={0} max={20}></input>
              <button onClick={(()=>{
                addItem(e)
              })} className="btn btn-primary text-light add_cart_btn text-uppercase">Add To Cart</button>
            </div>
            <hr/>
            <div className="description_category_div">
              <span>SKU:N/A </span><span>Category:{e.category} </span>
            </div>
          </div>
         
        </div>
       </>
      })}
      </div>




  
      <Description/>
    </>
  );
};

export default SingleProduct;
