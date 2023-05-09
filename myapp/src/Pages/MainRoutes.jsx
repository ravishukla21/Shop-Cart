import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import Payment from './Payment'
import SingleProductPage from '../Components/SingleProductPage';

import Login from './Login/Login';
import SignUp from "./SignUp/SignUp"



import Authpage from './Authpage';
import AuthProducts from '../Components/AuthProducts';
import AuthForm from '../Components/AuthForm';
import AuthEdit from '../Components/AuthEdit';



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

    
        <Route path="/admin" element={<Authpage/>}></Route>
        <Route path="/authproducts" element={<AuthProducts/>}></Route>
        <Route path="/authform" element={<AuthForm />}></Route>
        <Route path="/authedit/products/:id" element={<AuthEdit />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes;