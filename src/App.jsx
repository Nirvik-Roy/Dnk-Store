import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import {Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom"
import SingleProduct from "./Components/SingleProduct/SingleProduct"
import Navbar2 from "./Components/Navbar/Navbar2"
import { useEffect, useLayoutEffect, useState } from "react"
import Logos from "./Components/Logo/Logos"
import Featured from "./Components/Featured/Featured"
import ScrollTop from "./ScrollTop"


function App(props) {
  
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"instant"})
  },[])
    

  
 
  return (
    <>
    {/* <ScrollTop/>
    <div>
      <Navbar/>
    </div>
    <div>
      <Home/>
    </div>
    <div>
      <Logos/>
    </div>
    <div>
      <Featured/>
    </div> */}
  
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/singleproduct/:id/" element={<SingleProduct/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
