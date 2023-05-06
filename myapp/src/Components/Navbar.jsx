import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../images/ShopCart.png"


import {MdShoppingCartCheckout } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import Login from '../Pages/Login';


const Navbar = () => {
  return  <div className="nav_up" >
        <div id="navbar" > 
        
    

    <div className="parent-box-1">

           
        <div  className="logo_div">
          <Link to="/"> <img style={{width:"100%",border:"0px solid red"}} id="logo" src={logo} alt='logo'/></Link> 
        </div>
    
       <div className="menu_div">
           
            <div id="main_div">
                  <Link id="button"  to="/" >Categories</Link>
                <div id="asim1">
                  <div id="b">
                     <div className="div" id="d1">
                         <h5 className="h5"><Link to="/">Furniture</Link></h5>
                             <ul>
                                <li><Link to="/">T-shirts</Link></li>
                                <li><Link to="/">Casual Shirts</Link></li>
                                 <li><Link to="/">Formal Shirts</Link></li>
                                 <li><Link to="/">Sweatshirts</Link></li>
                                  <li><Link to="/">Sweaters</Link></li>
                                 <li><Link to="/">Jackets</Link></li>
                                 <li><Link to="/">Blazers & Coats</Link></li>
                                 <li><Link to="/">Suits</Link></li>
                                <li><Link to="/">Rain Jackets</Link></li>
                           
                             </ul>
                             </div>
                             <div  id="d2">  
                              <h5 className="h5"><Link to="/">HandBag</Link></h5>
                              <ul>
                                 <li><Link to="/">Kurtas & Kurta Sets</Link></li>
                                 <li><Link to="/">Sherwanis</Link></li>
                                 <li><Link to="/">Nehru Jackets</Link></li>
                                 <li><Link to="/">Dhotis</Link></li>
                             </ul>
                          </div>
                    
                    <div id="d3">
                       <h5 className="h5"><Link to="/">Shoes</Link></h5>
                       <ul>
                        <li><Link to="/">Jeans</Link></li>
                        <li><Link to="/">Causal Trousers</Link></li>
                        <li><Link to="/">Formal Trousers</Link></li>
                        <li><Link to="/">Sports</Link></li>
                        <li><Link to="/">Track Pants & joggers</Link></li>
                       </ul>
    
                       </div> 
                       <div id="d4">
                       <h5 className="h5"><Link to="/"></Link>Headphones</h5>
                       <ul>
                        <li><Link to="/">Briefs & Trunks</Link></li>
                        <li><Link to="/">Boxers</Link></li>
                        <li><Link to="/">Vests</Link></li>
                        <li><Link to="/">Sleepwear & Loungewear</Link></li>
                        <li><Link to="/">Thermals</Link></li>
                       </ul>
                       <h5 className="h5"><Link to="/"></Link></h5>
    
                     </div> 
                   
    
                   <div id="d5">
                   <h5 className="h5"><Link to="/">Laptop</Link></h5>
                   <ul>
                       <li><Link to="/">Casual Shoes</Link></li>
                       <li><Link to="/">Sports Shoes</Link></li>
                       <li><Link to="/">Formal Shoes</Link></li>
                       <li><Link to="/">Sneakers</Link></li>
                       <li><Link to="/">Sandals & Floaters</Link></li>
                       <li><Link to="/">Flip Flops</Link></li>
                       <li><Link to="/">Socks</Link></li>
                   </ul>
    
                   </div>
                   <div id="d6">
                   <h5 className="h5"><Link to="/">Books</Link></h5>
                   
               </div>
                   
                 </div>
              </div>
            
          </div>
      
    
    
    
    
           <div id="main_div" className='del'>
           <Link id="button"  to="/">Deals</Link>
           
       </div>
    
    
    
    
    
    
       <div id="main_div" className='del'>
       <Link id="button"  to="/">What's New</Link>
      
    </div>
    
    
    
    <div id="main_div" className='del' >
    <Link id="button"  to="/">Delivery</Link>
  
    </div>
    
    

    </div>
    
    
    </div>
{/* Dropdown for media query */}



{/* end here */}

    {/* <!-- parent-box-1 end --> */}

    {/* <!-- search part here  --> */}
    
    <div className="parent-box-2">
    
    <div className="div1" style={{display:"flex"}}>
   
        
        <input  type="text" name=""  id="search" placeholder="Search"  />
        
        <span id='ImSearch' > <ImSearch style={{marginTop:"10px"}}/></span> 
            
            <div id="two" ></div>
    
    </div>
    
    <div id="other_div">
        </div>
     
       
         
    
        <div className='last'>
            <div id="main_div">

            <h5 id="profile_tag">
            <Link  to="/" style={{display:"flex",alignItems:"center",marginBottom:"30px",gap:"5px"}}>
            <span > <ImUser  /></span> 
           
             Account
             </Link>
             </h5>
            <div id="asim7" >
              <div id="b">
                 <div className="div" id="d1">
                     <h5 id="lh5">Welcome</h5>
                     <p id="lp">To access account and manage order</p>
                     <button id="ls"><Link id="logincss"to="/"><Login/></Link></button>
                     <br/>
                     <>
                         <ul style={{textAlign:"left"}}>
                            <li><Link to="3">Order</Link></li>
                            <li><Link to="/">Wishlist</Link></li>
                             <li><Link to="/">Gift card</Link></li>
                             <li><Link to="/">Contact us</Link></li>
                              <li><Link to="/">ShopCart Insider <button id="insider_span">New</button></Link></li>
                          
                         </ul>
                        
                        </>
    
        
    
    
                         </div>
                        
                
           
               
             </div>
            </div>
            </div>
            
    
    
    
    
    
    
    
    
   
  
    
        <div className='cart' >
            
        <Link id="cart_tag" to="/" style={{display:"flex",textAlign:"center",gap:"8px"}}>
        <MdShoppingCartCheckout style={{marginTop:"3px"}}/>
         Cart
        </Link>
        </div>

        </div>
    </div>
    </div>
    
    </div> 
    
   

  
}

export default Navbar
