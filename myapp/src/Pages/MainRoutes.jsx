import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import Payment from './Payment'
import SingleProductPage from '../Components/SingleProductPage';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productpage' element={<ProductPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} /> //addsingle product here
        <Route path='/payment' element={<Payment />} />
        {/* <Route path='/login' element={<HomePage />} /> */}
      </Routes>
    </div>
  )
}

export default MainRoutes