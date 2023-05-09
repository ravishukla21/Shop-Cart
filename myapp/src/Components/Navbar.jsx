import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../images/ShopCart.png"
import {Box, Input} from "@chakra-ui/react"


import {MdShoppingCartCheckout } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import Login from '../Pages/Login/Login';



const Navbar = () => {




  return  <div className="nav_up" >
        <div id="navbar" > 
        
    

    <div className="parent-box-1" >

           
        <div  className="logo_div">
          <Link to="/"> <img style={{width:"100%",marginTop:"8px"}} id="logo" src={logo} alt='logo'/></Link> 
        </div>
    
       <div className="menu_div">
           
            <div id="main_div">
                  <Link id="button"  to="/productpage" style={{fontSize:"18px"}}>Categories</Link>
                <div id="asim1">
                  <div id="b">
                       <div id="d4">
                       <h5 className="h5"><Link to="/productpage"></Link>Headphones</h5>
                       <ul>
                        <li><Link to="/productpage">Wired </Link></li>
                        <li><Link to="/productpage">Wireless </Link></li>
                        <li><Link to="/productpage">Boat </Link></li>
                        <li><Link to="/productpage">Sports </Link></li>
                        <li><Link to="/productpage">JBL </Link></li>
                        <li><Link to="/productpage">Sony </Link></li>
                       </ul>
                       <h5 className="h5"><Link to="/productpage"></Link></h5>
    
                     </div> 
                             <div  id="d2">  
                              <h5 className="h5"><Link to="/productpage">Shoes</Link></h5>
                              <ul>
                                 <li><Link to="/productpage">Casual Shoes</Link></li>
                                 <li><Link to="/productpage">Formal Shoes</Link></li>
                                 <li><Link to="/productpage">Ofiice Shoes</Link></li>
                                 <li><Link to="/productpage">Rough & Tough Shoes</Link></li>
                             </ul>
                          </div>
                    
                     <div className="div" id="d1">
                         <h5 className="h5"><Link to="/productpage">Furniture</Link></h5>
                             <ul>
                                <li><Link to="/productpage">Sofa</Link></li>
                                <li><Link to="/productpage">Double Bed</Link></li>
                                 <li><Link to="/productpage">Single Bed</Link></li>
                                 <li><Link to="/productpage">Dining Table</Link></li>
                                  <li><Link to="/productpage">Dining Set</Link></li>
                                 <li><Link to="/productpage">Benny Bag</Link></li>
                                 <li><Link to="/productpage">Chairs</Link></li>
                                 <li><Link to="/productpage">Study Tables</Link></li>
                                <li><Link to="/productpage">Dining Tables</Link></li>
                           
                             </ul>
                             </div>
                    <div id="d3">
                       <h5 className="h5"><Link to="/productpage">Earphones</Link></h5>
                       <ul>
                        <li><Link to="/productpage">Wired </Link></li>
                        <li><Link to="/productpage">Wireless </Link></li>
                        <li><Link to="/productpage">Boat </Link></li>
                        <li><Link to="/productpage">Sports </Link></li>
                        <li><Link to="/productpage">JBL </Link></li>
                       </ul>
    
                       </div> 
                   
    
                   <div id="d5">
                   <h5 className="h5"><Link to="/productpage">Jewellery</Link></h5>
                   <ul>
                       <li><Link to="/productpage">Jewellery Set</Link></li>
                       <li><Link to="/productpage">Necklace And Chains</Link></li>
                       <li><Link to="/productpage">Bracelet</Link></li>
                       <li><Link to="/productpage">Ring</Link></li>
                       <li><Link to="/productpage">Bangles</Link></li>
                       <li><Link to="/productpage">Head Jewellery</Link></li>
                       <li><Link to="/productpage">Toe Rings</Link></li>
                   </ul>
    
                   </div>
            
                   
                 </div>
              </div>
            
          </div>
      
    
    
    
    
           <div id="main_div" >
           <Link id="button"  to="/productpage" style={{fontSize:"18px"}}>Deals</Link>
           
       </div>
    
    
    
    
    
    
       <div id="main_div" >
       <Link id="button"  to="/productpage" style={{fontSize:"18px"}}>What's New</Link>
      
    </div>
    
    
    
    <div id="main_div" >
    <Link id="button"  to="/productpage" style={{fontSize:"18px"}}>Delivery</Link>
  
    </div>
    
    

    </div>
    
    
    </div>
{/* Dropdown for media query */}



{/* end here */}

    {/* <!-- parent-box-1 end --> */}

    {/* <!-- search part here  --> */}
    
    <div className="parent-box-2">
    

        <div className='inpSearch'>
            <Box display={'absolute'}>

       <Input placeholder="Search" w={'300px'} name="search" />
             
            </Box>
            
     <Box className='imSearch' >
         <ImSearch />
         </Box> 


        </div>
            

        <div className='last'>
            <div id="main_div">

            <h5 id="profile_tag"  >
            <Link  to="/productpage" style={{display:"flex",alignItems:"center",marginBottom:"30px",gap:"5px",fontSize:"18px"}}>
            <span > <ImUser  /></span> 
           
             Account
             </Link>
             </h5>
            <div id="asim7" >
              <div id="b">
                 <div className="div" id="d1">
                     <h5 id="lh5">Welcome</h5>
                     <p id="lp">To access account and manage order</p>
                     <button id="ls"><Link id="logincss"to="/productpage"><Login/></Link></button>
                     <br/>
                     <>
                         <ul style={{textAlign:"left"}}>
                            <li><Link to="3">Order</Link></li>
                            <li><Link to="/productpage">Wishlist</Link></li>
                             <li><Link to="/productpage">Gift card</Link></li>
                             <li><Link to="/productpage">Contact us</Link></li>
                              <li><Link to="/productpage">ShopCart Insider <button id="insider_span">New</button></Link></li>
                          
                         </ul>
                        
                        </>
    
        
    
    
                         </div>
                        
                
           
               
             </div>
            </div>
            </div>
            
    
    
    
    
    
    
    
    
   
  
    
        <div className='cart' >
            
        <Link  id="cart_tag" to="/productpage" style={{display:"flex",textAlign:"center",gap:"2px",fontSize:"18px"}}>
        <MdShoppingCartCheckout style={{marginTop:"6px"}}/>
         Cart
        </Link>
        </div>

        </div>
    </div>
    </div>
    
    </div> 
    
   

  
}

export default Navbar