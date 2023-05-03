import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'


import {MdShoppingCartCheckout } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { ImSearch } from "react-icons/im";


const Navbar = () => {
  return  <div className="nav_up" >
        <div id="navbar" > 
        
    

    <div className="parent-box-1">

           
        <div  className="logo_div">
          <Link to="/"> <img id="logo" src="hello" alt='logo'/></Link> 
        </div>
    
       <div className="menu_div">
           
            <div id="main_div">
                  <Link id="button"  to="/">Categories</Link>
                <div id="asim1">
                  <div id="b">
                     <div className="div" id="d1">
                         <h5 className="h5"><Link to="/">Topwear</Link></h5>
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
                              <h5 className="h5"><Link to="/">Indian & Festive Wear</Link></h5>
                              <ul>
                                 <li><Link to="/">Kurtas & Kurta Sets</Link></li>
                                 <li><Link to="/">Sherwanis</Link></li>
                                 <li><Link to="/">Nehru Jackets</Link></li>
                                 <li><Link to="/">Dhotis</Link></li>
                             </ul>
                          </div>
                    
                    <div id="d3">
                       <h5 className="h5"><Link to="/">Bottom Wear</Link></h5>
                       <ul>
                        <li><Link to="/">Jeans</Link></li>
                        <li><Link to="/">Causal Trousers</Link></li>
                        <li><Link to="/">Formal Trousers</Link></li>
                        <li><Link to="/">Sports</Link></li>
                        <li><Link to="/">Track Pants & joggers</Link></li>
                       </ul>
    
                       </div> 
                       <div id="d4">
                       <h5 className="h5"><Link to="/"></Link>Innerwear & Joggers</h5>
                       <ul>
                        <li><Link to="/">Briefs & Trunks</Link></li>
                        <li><Link to="/">Boxers</Link></li>
                        <li><Link to="/">Vests</Link></li>
                        <li><Link to="/">Sleepwear & Loungewear</Link></li>
                        <li><Link to="/">Thermals</Link></li>
                       </ul>
                       <h5 className="h5"><Link to="/"></Link>Plus Size</h5>
    
                     </div> 
                   
    
                   <div id="d5">
                   <h5 className="h5"><Link to="/">Footwear</Link></h5>
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
                   <h5 className="h5"><Link to="/">Personal care & Grooming</Link></h5>
                   <h5 className="h5"><Link to="/">Sunglass & Frames</Link></h5>
                   <h5 className="h5"><Link to="/">Watches</Link></h5>
               </div>
                   
                 </div>
              </div>
            
          </div>
      
    
    
    
    
           <div id="main_div">
           <Link id="button"  to="/">Deals</Link>
           <div id="asim2">
             <div id="b">
                <div className="div" id="d1">
                    <h5 className="h5"><Link to="/">Indian & Fusion wear</Link></h5>
                        <ul>
                           <li><Link to="/">Kurtas & Suits</Link></li>
                           <li><Link to="/">Kurtis,Tunics & Tops</Link></li>
                            <li><Link to="/">Ethnic Wear</Link></li>
                            <li><Link to="/">Leggings, Salwars & Churidars</Link></li>
                             <li><Link to="/">Skirts & Palazzos</Link></li>
                            <li><Link to="/">Sarees</Link></li>
                            <li><Link to="/">Dress Materials</Link></li>
                            <li><Link to="/">Lehenga Cholis</Link></li>
                           <li><Link to="/">Dupattas & Shawls</Link></li>
                        </ul>
                        </div>
                        <div  id="d2">
                         <h5 className="h5"><Link to="/">Western wear</Link></h5>
                         <ul>
                            <li><Link to="/">Dresses</Link></li>
                            <li><Link to="/">Tops</Link></li>
                            <li><Link to="/">Tshirts</Link></li>
                            <li><Link to="/">Jeans</Link></li>
                            <li><Link to="/">Trousers & Capris</Link></li>
                            <li><Link to="/">Shorts & Skirts</Link></li>
                            <li><Link to="/">Co-ords</Link></li>
                            <li><Link to="/">Playsuits</Link></li>
                        </ul>
                     </div>
               <div id="d3">
                  <h5 className="h5"><Link to="/">Sport & Active wear</Link></h5>
                  <ul>
                   <li><Link to="/">Clothing</Link></li>
                   <li><Link to="/">Footwear</Link></li>
                   <li><Link to="/">Sports Accessories</Link></li>
                   <li><Link to="/">Sports Equipment</Link></li>
                  </ul>
                  </div>
                  <div id="d4">
                  <h5 className="h5"><Link to="/"></Link>Beauty & Personal care</h5>
                  <ul>
                   <li><Link to="/">Makeup</Link></li>
                   <li><Link to="/">Skincare</Link></li>
                   <li><Link to="/">Premium Beauty</Link></li>
                   <li><Link to="/">Lipsticks</Link></li>
                   <li><Link to="/">Fragrances</Link></li>
                  </ul>
                  <h5 className="h5"><Link to="/"></Link>Plus Size</h5>
                </div>
              <div id="d5">
              <h5 className="h5"><Link to="/">Lingerie & Sleepwear</Link></h5>
              <ul>
                  <li><Link to="/">Bra</Link></li>
                  <li><Link to="/">Briefs</Link></li>
                  <li><Link to="/">Shapewear</Link></li>
                  <li><Link to="/">Sleepwear & Loungewear</Link></li>
                  <li><Link to="/">Swimwear</Link></li>
                  <li><Link to="/">Camisoles & Thermals</Link></li>
                  <li><Link to="/">Socks</Link></li>
              </ul>
              </div>
             
            </div>
         </div>
       </div>
    
    
    
    
    
    
       <div id="main_div">
       <Link id="button"  to="/">What's New</Link>
       <div id="asim3">
         <div id="b">
            <div className="div" id="d1">
                <h5 className="h5"><Link to="/">Boys Clothing</Link></h5>
                    <ul>
                       <li><Link to="/">T-Shirts</Link></li>
                       <li><Link to="/">Shirts</Link></li>
                        <li><Link to="/">Shorts</Link></li>
                        <li><Link to="/">Jeans</Link></li>
                         <li><Link to="/">Trousers</Link></li>
                        <li><Link to="/">Clothing Sets</Link></li>
                        <li><Link to="/">Ethnic Wear</Link></li>
                        <li><Link to="/">Track Pants & Pyjamas</Link></li>
                       <li><Link to="/">Jacket, Sweater & Sweatshirts</Link></li>
                       <li><Link to="/">Party Wear</Link></li>
                       <li><Link to="/">Innerwear & Thermals</Link></li>
                      
                    </ul>
                    </div>
                    <div  id="d2">
                     <h5 className="h5"><Link to="/">Girls Clothing</Link></h5>
                     <ul>
                        <li><Link to="/">Dresses</Link></li>
                        <li><Link to="/">Tops</Link></li>
                        <li><Link to="/">Tshirts</Link></li>
                        <li><Link to="/">Clothing Sets</Link></li>
                        <li><Link to="/">Lehenga choli</Link></li>
                        <li><Link to="/">Kurta Sets</Link></li>
                        <li><Link to="/">Party wear</Link></li>
                        <li><Link to="/">Dungarees & Jumpsuits</Link></li>
                        <li><Link to="/">Skirts & shorts</Link></li>
                        <li><Link to="/">Tights & Leggings</Link></li>
                     
                    </ul>
                 </div>
           <div id="d3">
              <h5 className="h5"><Link to="/">Footwear</Link></h5>
              <ul>
               <li><Link to="/">Casual Shoes</Link></li>
               <li><Link to="/">Flipflops</Link></li>
               <li><Link to="/">Sports Shoes</Link></li>
               <li><Link to="/">Flats</Link></li>
               <li><Link to="/">Sandals</Link></li>
               <li><Link to="/">Heels</Link></li>
               <li><Link to="/">School Shoes</Link></li>
               <li><Link to="/">Socks</Link></li>
              </ul>
              </div>
              <div id="d4">
              <h5 className="h5"><Link to="/"></Link>Infants</h5>
              <ul>
               <li><Link to="/">Bodysuits</Link></li>
               <li><Link to="/">Rompers & Sleepsuits</Link></li>
               <li><Link to="/">Clothing Sets</Link></li>
               <li><Link to="/">Tshirts & Tops</Link></li>
               <li><Link to="/">Dresses</Link></li>
               <li><Link to="/">Bottom wear</Link></li>
               <li><Link to="/">Winter Wear</Link></li>
               <li><Link to="/">Innerwear & Sleepwear</Link></li>
               <li><Link to="/">Infant Care</Link></li>
              </ul>
              <h5 className="h5"><Link to="/"></Link>Plus Size</h5>
            </div>
          <div id="d5">
          <h5 className="h5"><Link to="/">Kids Accessories</Link></h5>
          <ul>
              <li><Link to="/">Bags & Backpacks</Link></li>
              <li><Link to="/">Watches</Link></li>
              <li><Link to="/">Jewellery & Hair accessory</Link></li>
              <li><Link to="/">Sunglasses</Link></li>
              <li><Link to="/">Masks & Protective Gears</Link></li>
              <li><Link to="/">Caps & Hats</Link></li>
             
          </ul>
          </div>
       
        </div>
     </div>
    </div>
    
    
    
    <div id="main_div">
    <Link id="button"  to="/">Delivery</Link>
    {/* <div id="asim4">
      <div id="b">
         <div className="div" id="d1">
             <h5 className="h5"><Link to="/">Bed Linen & Furnishing</Link></h5>
                 <ul>
                    <li><Link to="/">Bed Runners</Link></li>
                    <li><Link to="/">Mattress Protectors</Link></li>
                     <li><Link to="/">Bedsheets</Link></li>
                     <li><Link to="/">Bedding Sets</Link></li>
                      <li><Link to="/">Blankets, Quilts & Dohars</Link></li>
                     <li><Link to="/">Pillows & Pillow Covers</Link></li>
                     <li><Link to="/">Bed Covers</Link></li>
                     <li><Link to="/">Diwan Sets</Link></li>
                    <li><Link to="/">Chair Pads & Covers</Link></li>
                    <li><Link to="/">Sofa Covers</Link></li>
                  
                 </ul>
                 </div>
                 <div  id="d2">
                  <h5 className="h5"><Link to="/">Bath</Link></h5>
                  <ul>
                     <li><Link to="/">Bath Towels</Link></li>
                     <li><Link to="/">Hand & Face Towels</Link></li>
                     <li><Link to="/">Beach Towels</Link></li>
                     <li><Link to="/">Towels Set</Link></li>
                     <li><Link to="/">Bath Rugs</Link></li>
                     <li><Link to="/">Bath Robes</Link></li>
                     <li><Link to="/">Bathroom Accessories</Link></li>
                     <li><Link to="/">Shower Curtains</Link></li>
                  
                 </ul>
              </div>
        <div id="d3">
           <h5 className="h5"><Link to="/">Home Décor</Link></h5>
           <ul>
            <li><Link to="/">Plants & Planters</Link></li>
            <li><Link to="/">Aromas & Candles</Link></li>
            <li><Link to="/">Clocks</Link></li>
            <li><Link to="/">Mirrors</Link></li>
            <li><Link to="/">Wall Décor</Link></li>
            <li><Link to="/">Festive Decor</Link></li>
            <li><Link to="/">Pooja Essentials</Link></li>
            <li><Link to="/">Wall Shelves</Link></li>
            <li><Link to="/">Fountains</Link></li>
            <li><Link to="/">Showpieces & Vases</Link></li>
           </ul>
           </div>
           <div id="d4">
           <h5 className="h5"><Link to="/"></Link>Kitchen & Table</h5>
           <ul>
            <li><Link to="/">Table Runners</Link></li>
            <li><Link to="/">Dinnerware & Serveware</Link></li>
            <li><Link to="/">Cups and Mugs</Link></li>
            <li><Link to="/">Bakeware & Cookware</Link></li>
            <li><Link to="/">Kitchen Storage & Tools</Link></li>
            <li><Link to="/">Bar & Drinkware</Link></li>
            <li><Link to="/">Table Covers & Furnishings</Link></li>
           
           </ul>
           <h5 className="h5"><Link to="/"></Link>Curtains</h5>
         </div>
       <div id="d5">
       <h5 className="h5"><Link to="/">Lamps & Lighting</Link></h5>
       <ul>
           <li><Link to="/">Floor Lamps</Link></li>
           <li><Link to="/">Ceiling Lamps</Link></li>
           <li><Link to="/">Table Lamps</Link></li>
           <li><Link to="/">Wall Lamps</Link></li>
           <li><Link to="/">Outdoor Lamps</Link></li>
           <li><Link to="/">String Lights</Link></li>
          
       </ul>
       </div>
       
     </div>
    </div> */}
    </div>
    
    
{/*     
    <div id="main_div">
    <Link id="button"  to="/">BEAUTY</Link>
    <div id="asim5" >
      <div id="b">
         <div className="div" id="d1">
             <h5 className="h5"><Link to="/">Makeup</Link></h5>
                 <ul>
                    <li><Link to="/">Lipstick</Link></li>
                    <li><Link to="/">Lip Gloss</Link></li>
                     <li><Link to="/">Lip Liner</Link></li>
                     <li><Link to="/">Mascara</Link></li>
                      <li><Link to="/">Eyeliner</Link></li>
                     <li><Link to="/">Kajal</Link></li>
                     <li><Link to="/">Eyeshadow</Link></li>
                     <li><Link to="/">Foundation</Link></li>
                    <li><Link to="/">Primer</Link></li>
                    <li><Link to="/">Concealer</Link></li>
                    <li><Link to="/">Compact</Link></li>
                    <li><Link to="/">Nail Polish</Link></li>
                  
                 </ul>
                 </div>
                 <div  id="d2">
                  <h5 className="h5"><Link to="/">Skincare, Bath & Body</Link></h5>
                  <ul>
                     <li><Link to="/">Face Moisturiser</Link></li>
                     <li><Link to="/">Cleanser</Link></li>
                     <li><Link to="/">Masks & Peel</Link></li>
                     <li><Link to="/">Sunscreen</Link></li>
                     <li><Link to="/">Serum</Link></li>
                     <li><Link to="/">Face Wash</Link></li>
                     <li><Link to="/">Eye Cream</Link></li>
                     <li><Link to="/">Lip Balm</Link></li>
                     <li><Link to="/">Body Lotion</Link></li>
                     <li><Link to="/">Body Wash</Link></li>
                     <li><Link to="/">Body Scrub</Link></li>
                     <li><Link to="/">Hand Cream</Link></li>
                  
                 </ul>
              </div>
        <div id="d3">
           <h5 className="h5"><Link to="/">Haircare</Link></h5>
           <ul>
            <li><Link to="/">Shampoo</Link></li>
            <li><Link to="/">Conditioner</Link></li>
            <li><Link to="/">Hair Cream</Link></li>
            <li><Link to="/">Hair Oil</Link></li>
            <li><Link to="/">Hair Gel</Link></li>
            <li><Link to="/">Hair Color</Link></li>
            <li><Link to="/">Hair Serum</Link></li>
            <li><Link to="/">Hair Accessory</Link></li>
            
           </ul>
           </div>
          
       <div id="d5">
       <h5 className="h5"><Link to="/">Beauty Gift & Makeup Set</Link></h5>
       <ul>
           <li><Link to="/">Beauty Gift</Link></li>
           <li><Link to="/">Makeup Kit</Link></li>
           <li><Link to="/">Trimmers</Link></li>
           <li><Link to="/">Beard Oil</Link></li>
           <li><Link to="/">Hair Wax</Link></li>
          
       </ul>
       </div>
       <div id="d6">
       <h5 className="h5"><Link to="/">Top Brands</Link></h5>
       <ul>
        <li><Link to="/">Lakme</Link></li>
        <li><Link to="/">Maybelline</Link></li>
        <li><Link to="/">LOreal</Link></li>
        <li><Link to="/">Philips</Link></li>
        <li><Link to="/">Bath & Body Works</Link></li>
        <li><Link to="/">THE BODY SHOP</Link></li>
        <li><Link to="/">Biotique</Link></li>
        <li><Link to="/">Mamaearth</Link></li>
        <li><Link to="/">MCaffeine</Link></li>
        <li><Link to="/">Nivea</Link></li> 
    </ul>
    <h5 className="h5"><Link to="/">Home & Bath</Link></h5>
    </div>
     </div>
    </div>
    </div> */}
          
    
    
    {/* <div id="main_div">      
    <Link  id="button"  to="/">STUDIO<sup>New</sup></Link>
       </div> */}
    </div>
    
    
    </div>
    {/* <!-- parent-box-1 end --> */}

    {/* <!-- search part here  --> */}
    
    <div className="parent-box-2">
    
    <div className="div1" style={{display:"flex"}}>
   
        
        <input  type="text" name="" id="search" placeholder="Search"  />
        
        <span > <ImSearch/></span> 
            
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
            <div id="asim7">
              <div id="b">
                 <div className="div" id="d1">
                     <h5 id="lh5">Welcome</h5>
                     <p id="lp">To access account and manage order</p>
                     <button id="ls"><Link id="logincss"to="/">LOGIN / SIGNUP</Link></button>
                     <br/>
                     <>
                         <ul>
                            <li><Link to="3">Order</Link></li>
                            <li><Link to="/">Wishlist</Link></li>
                             <li><Link to="/">Gift card</Link></li>
                             <li><Link to="/">Contact us</Link></li>
                              <li><Link to="/">Myntra Insider <button id="insider_span">New</button></Link></li>
                          
                         </ul>
                        
                        </>
    
        
    
    
                         </div>
                        
                
           
               
             </div>
            </div>
            </div>
            
    
    
    
    
    
    
    
    
   
        {/* <div>
            <Link to="/"><i className="fa-solid fa-heart font"  id="i1"><span id="count_wish">&nbsp;</span></i></Link><br/>
          <Link id="wishlist_tag" to="/">Whishlist</Link>
        </div> */}
    
        <div>
            
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
