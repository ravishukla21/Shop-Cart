import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import Payment from './Payment'
import SingleProductPage from '../Components/SingleProductPage';
import Login from './Login/Login';
import SignUp from "./SignUp/SignUp"




const MainRoutes = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productpage' element={<ProductPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} /> //addsingle product here
        <Route path='/payment' element={<Payment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default MainRoutes;