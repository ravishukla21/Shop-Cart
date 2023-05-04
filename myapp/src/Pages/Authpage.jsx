import React from 'react'
import AuthForm from '../Components/AuthForm'
import AuthProducts from '../Components/AuthProducts'
import { Route, Routes,Link } from 'react-router-dom'
import AuthEdit from '../Components/AuthEdit'

const Authpage = () => { 
  return (
    <div>Authpage
    <br/>
    <Link to="/authproducts">ALL PRODUCTS</Link>      
    {"   "}{"   "}


    <Link to="/authform">ADD PRODUCT</Link>
    {"   "}{"   "}
    
   
    <Routes>
    <Route path="/authproducts" element={<AuthProducts/>}></Route>
    <Route path="/authform" element={<AuthForm/>}></Route>
    
    <Route path="/authedit/products/:id" element={<AuthEdit/>}></Route>
    </Routes>
    
    
   
    
    </div>
  )
}

export default Authpage