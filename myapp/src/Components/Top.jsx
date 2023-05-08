
import React from 'react'
import "../styles/Top.css"

import { ImPhone } from "react-icons/im";
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div id='main' style={{ height: "30px", paddingTop: "5px", paddingBottom: "3px", color: "white" }}>
      <div className='contact'>
        <ImPhone /> <p style={{ color: "white" }} id="num">+9190999002</p>
      </div>

      <div className='mid'>
        <p style={{ color: "white" }}>Get 50% off on Selected items  </p> <p style={{ color: "white" }}> |  Shop Now</p>
      </div>
      <div className='end'>


        <p style={{ color: "white" }} id='lang'><Link>Eng</Link></p>


        <p style={{ color: "white" }} className='loc'><Link>Location</Link></p>




      </div>


    </div>
  )
}

export default Top
