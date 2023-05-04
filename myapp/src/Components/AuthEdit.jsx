import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateproduct } from '../Redux/ProductReducer/action';
import { useDispatch } from 'react-redux';

const AuthEdit = () => {
    const [single,setsingle]=useState({ title: "",
    image: "",
    price: 0,
    description: "",
    quantity: 0
})
    const val = useParams();
    const dispatch=useDispatch();
    const {id}=val;
    console.log(val, "valuseparmas")
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
         console.log(res.data,"singleget")
         setsingle(res.data)
        })

        
    },[id])
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setsingle((prev)=>{return {...prev,[name]:value} })

    }

    console.log(single,"single")
    const handleClick=()=>{
       dispatch( updateproduct(id,single)) 
    }


    

    return (
        <div>AuthEdit
        <br/>
            <input type="text" placeholder="title"  name="title" value={single.title} onChange={handleChange} />
            <input type="text" placeholder="image"  name="image" value={single.image} onChange={handleChange}/>
            <input type="number" placeholder="price"  name="price" value={single.price} onChange={handleChange}/>
            <input type="text" placeholder="description"   name="description" value={single.description} onChange={handleChange} />
            <input type="number" placeholder="quantity"  name="quantity" value={single.quantity} onChange={handleChange}/>
            <button onClick={handleClick}>EDIT</button>


        </div>
    )
}

export default AuthEdit