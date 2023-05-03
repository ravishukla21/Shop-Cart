
import React from 'react'
import "../styles/Top.css"

import { ImPhone } from "react-icons/im";

const Top = () => {
  return (
  <div id='main'>
<div className='contact'>
 <ImPhone style={{marginBottom:"12px"}}/> <p>990999002</p>  
</div>

<div className='mid'>
    <p>Get 50% off on Selected items  </p> <p> |  Shop Now</p> 
</div>
    <div className='end'>
  
      <p >Eng</p>
      <p>Location  </p>
      </div>
  </div>
  )
}

export default Top
