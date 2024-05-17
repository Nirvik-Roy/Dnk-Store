import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleProduct from './Components/SingleProduct/SingleProduct.jsx'
import Navbar2 from './Components/Navbar/Navbar2.jsx'
import Home from './Components/Home/Home.jsx'
import { useState } from 'react'
import {Provider} from "react-redux"
import store from './Store/Store.jsx'

// const router =createBrowserRouter(
//   [
  
//   {
//     path:"/",
//     exact:true,
//     element:<App/>,
   
//   },
//   {
//     path:"/singleproduct/:id/",
//     exact:true,
//     element:<SingleProduct/>,
//   }

// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>

   
    <App/>
 
   {/* <RouterProvider router={router} ></RouterProvider> */}
   
  </Provider>,
 
)
