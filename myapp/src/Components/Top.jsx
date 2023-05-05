
import React from 'react'
import "../styles/Top.css"

import { ImPhone } from "react-icons/im";
import { Link } from 'react-router-dom';

const Top = () => {
  return (
  <div id='main' style={{height:"30px", paddingTop:"5px",paddingBottom:"3px"}}>
<div className='contact'>
 <ImPhone /> <p id="num">+9190999002</p>  
</div>

<div className='mid'>
    <p>Get 50% off on Selected items  </p> <p> |  Shop Now</p> 
</div>
    <div className='end'>
        
            
                <p id='lang'><Link>Eng</Link></p>
              
                
                <p><Link>Location</Link></p>
               

            
            
             </div>   
      
      
  </div>
  )
}

export default Top
