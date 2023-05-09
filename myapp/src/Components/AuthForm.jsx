import React, { useEffect, useState } from 'react';
import { addproduct } from '../Redux/ProductReducer/action';
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios';
import "../styles/RegistrationForm.css";
import {Link} from "react-router-dom"


const AuthForm = () => {  
    const dispatch=useDispatch();
    const store=useSelector(store=>store.ProductReducer);
    const obj = {
        title: "",
        img: "",
        price: 0,
        description: "",
        quantity: 0,
        category:"",
        brand:"",
        rating:0


    }
    const [add, setadd] = useState(obj)
    const handleChange = (e) => {
        const {name,value}=e.target;
        setadd((prev)=>{return {...prev,[name]:value}})


    }
    // console.log(add,"addd")
    //post request
    const handleSubmit=(e)=>{
        e.preventDefault();
    console.log(add,"798321698461686")
    dispatch(addproduct(add))
    
    }

    console.log(store,"Storecheckinauthform")
    

    return (
        <div>
        <div style={{ display: "flex", columnGap: "20px" }}>
        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>
          <Link to="/authproducts">ALL PRODUCTS</Link>
          {"   "}{"   "}

        </button>

        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>

          <Link to="/authform">ADD PRODUCT</Link>
          {"   "}{"   "}


        </button>








      </div>

        {/*   <input type="text" placeholder="title" value={add.title} onChange={handleChange} name="title" />
      
          <input type="text" placeholder="image" value={add.image} onChange={handleChange} name="image" />


            <input type="number" placeholder="price" value={add.price} onChange={handleChange} name="price"/>


              <input type="text" placeholder="description" value={add.description} onChange={handleChange} name="description" />

              
            <input type="number" placeholder="quantity" value={add.quantity} onChange={handleChange} name="quantity" />

            <button onClick={handleSubmit}>ADD</button>

    
    
    */}
          
          
          
          
            

            <br/>
            <div className='body'>
            <div className='container'>
                <header>Add Data</header>

                <form onSubmit={handleSubmit}>
                    <div className='form first'>
                        <div className='details personal'>
                            <span className='title'>Details</span>
                            <div className='fields'>
                                <div className='input-field'>
                                    <label>Title</label>

                                    <input type="text" placeholder='Enter Title'
                                   
                                    value={add.title} onChange={handleChange} name="title"

                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>image</label>

                                    <input type="text" placeholder='Enter image'
                                    name="img"
                                    value={add.image} onChange={handleChange}
                                    
                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>Price</label>

                                    <input type="number" placeholder='Enter your price'
                                    name="price"

                                    value={add.price} onChange={handleChange}
                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>Description</label>

                                    <input type="text" placeholder='Enter your description'
                                    name="description"
                                    value={add.description} onChange={handleChange} 
                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>Quantity</label>

                                    <input type="number"  placeholder='Enter quantity' name="quantity" 
                                    
                                    value={add.quantity} onChange={handleChange} 
                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>Category</label>

                                    <input type="text" placeholder='Enter your Category' 
                                    
                                    name="category" 
                                    
                                    value={add.category} onChange={handleChange} 
                                    required />

                                </div>

                                <div className='input-field'>
                                    <label>Brand</label>

                                    <input type="text" placeholder='Enter your Brand' 
                                    name="brand" 
                                    value={add.brand} onChange={handleChange} 
                                    
                                    required />

                                </div>
                                <div className='input-field'>
                                    <label>Rating</label>

                                    <input type="number" placeholder='Enter your rating' 
                                    name="rating" 
                                    value={add.rating} onChange={handleChange} 
                                    required />

                                </div>
                                <div className='input-field' style={{border:"0px solid red"}}>
                                <label >Extra</label>
                                <div >
                                <input/>
                                
                                
                                </div>

                               

                               
                                </div>

                            </div>

                        </div>

                    </div>

                    <div >
                    <button style={{backgroundColor:"white",border:"2px solid red",color:'black',width:"192px",height:'35px',margin:"10px 0px",cursor:"pointer"}}>ADD</button>
                    </div>


                </form>

            </div>



        </div>

        </div>
    )
}

export default AuthForm