import React from 'react'
import AuthForm from '../Components/AuthForm'
import AuthProducts from '../Components/AuthProducts'
import { Route, Routes, Link } from 'react-router-dom'
import AuthEdit from '../Components/AuthEdit'

import SingleProductPage from '../Components/SingleProductPage';

const Authpage = () => { 
  return (
    <div>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>
          <Link to="/authproducts">ALL PRODUCTS</Link>
          {"   "}{"   "}

        </button>

        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>

          <Link to="/authform">ADD PRODUCT</Link>
          {"   "}{"   "}


        </button>








      </div>

    




    </div>
  )
}

export default Authpage

//   <Routes>
       
// <Route path="/authproducts" element={<AuthProducts/>}></Route>
// <Route path="/authform" element={<AuthForm />}></Route>
// <Route path="/authedit/products/:id" element={<AuthEdit />}></Route>

// </Routes>