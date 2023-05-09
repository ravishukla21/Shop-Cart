import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { updateproduct } from '../Redux/ProductReducer/action';
import { useDispatch } from 'react-redux';

const AuthEdit = () => {  
    const [single, setsingle] = useState({
        title: "",
        img: [],
        price: 0,
        description: "",
        quantity: 0,
        category:"",
        brand:"",
        rating:0
    })

    const [img123,setimg123]=useState(0)
    const val = useParams();
    const dispatch = useDispatch();
    const { id } = val;
    console.log(val, "valuseparmas")
    useEffect(() => {
        axios.get(` https://si2s8l.sse.codesandbox.io/products/${id}`).then((res) => {
            console.log(res.data, "singleget")
            setsingle(res.data)
        })


        setimg123(single.img)
       


    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setsingle((prev) => { return { ...prev, [name]: value } })

       

    }

    console.log(single, "single")
   

    const handleClick = () => {
        dispatch(updateproduct(id, single))
    }


    console.log(img123,"length")

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




        <div style={{border:"1px solid red",top:"20px",left:"20px",minHeight:"60vh",alignItems:"center",justifyContent:"spacebetween",flexWrap:"wrap"}}>
            
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Title</label>
        <input style={{border:"1px solid black"}} type="text" placeholder="title" name="title" value={single.title} onChange={handleChange} />
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Image</label>
        


        <input type="text" placeholder="image" 

        style={{border:"1px solid black"}} 
        name={single.img[0]} value={single.img[0]} onChange={handleChange} />
        <input type="text" placeholder="image" 

        style={{border:"1px solid black"}} 
        name={single.img[1]} value={single.img[1]} onChange={handleChange} />
        <input type="text" placeholder="image" 

        style={{border:"1px solid black"}} 
        name={single.img[2]} value={single.img[2]} onChange={handleChange} />
        <input type="text" placeholder="image" 

        style={{border:"1px solid black"}} 
        name={single.img[3]} value={single.img[3]} onChange={handleChange} />
        
        
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Price</label>
        <input type="number" placeholder="price" 
        style={{border:"1px solid black"}} 
        name="price" value={single.price} onChange={handleChange} />
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Description</label>
        <input type="text" style={{border:"1px solid black"}}  placeholder="description" name="description" value={single.description} onChange={handleChange} />
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Quantity</label>
        <input type="number"  style={{border:"1px solid black",alignItems:"center"}}  placeholder="quantity" name="quantity" value={single.quantity} onChange={handleChange} />
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Category</label>
        <input type="text" style={{border:"1px solid black",alignItems:"center"}}  placeholder="category" name="category" value={single.category} onChange={handleChange} />
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Brand</label>
        <input type="text" style={{border:"1px solid black",alignItems:"center"}}  placeholder="brand" name="brand" value={single.brand} onChange={handleChange} />
        
        </div>
        <br/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <label>Rating</label>
        <input type="number" style={{border:"1px solid black",alignItems:"center"}}  placeholder="rating" name="rating" value={single.rating} onChange={handleChange} />
        
        </div>
        <br/>
        <div>

        <button style={{
            border: "1px solid red", borderRadius: "30px",
            padding: "5px 10px", background: "rgb(54,46,156)", color: "white",margin:"20px 10px"

        }}  onClick={handleClick}>EDIT</button>
        </div>
    </div>
        
        
        </div>
       
    )
}

export default AuthEdit