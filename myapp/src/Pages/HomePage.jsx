import React from 'react'
import Top from '../Components/Top'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Slider from '../Components/Slider'
import Brands from '../Components/Brands'
import Discount from '../Components/Discount'

import DiscountBanner from '../Components/DiscountBanner'
import MidLast from '../Components/Mid/MidLast'
import Footer from '../Components/Footer'


const HomePage = () => {
    return (
        <div style={{padding:"2px 2px"}}>

            <MidLast />
            <Categories />
            <Slider />
        
            <Brands />
            <Discount />
            <DiscountBanner />
           

        </div>
    )
}

export default HomePage;