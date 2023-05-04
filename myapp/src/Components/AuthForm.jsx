import React, { useEffect, useState } from 'react';
import { addproduct } from '../Redux/ProductReducer/action';
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios';


const AuthForm = () => {
    const dispatch=useDispatch();
    const store=useSelector(store=>store.ProductReducer);
    const obj = {
        title: "",
        image: "",
        price: 0,
        description: "",
        quantity: 0

    }
    const [add, setadd] = useState(obj)
    const handleChange = (e) => {
        const {name,value}=e.target;
        setadd((prev)=>{return {...prev,[name]:value}})


    }
    // console.log(add,"addd")
    //post request
    const handleSubmit=()=>{
    console.log(add,"798321698461686")
    dispatch(addproduct(add))
    
    }

    console.log(store,"Storecheckinauthform")
    

    return (
        <div>AuthForm
        <br/>
            <input type="text" placeholder="title" value={add.title} onChange={handleChange} name="title" />
            <input type="text" placeholder="image" value={add.image} onChange={handleChange} name="image" />
            <input type="number" placeholder="price" value={add.price} onChange={handleChange} name="price"/>
            <input type="text" placeholder="description" value={add.description} onChange={handleChange} name="description" />
            <input type="number" placeholder="quantity" value={add.quantity} onChange={handleChange} name="quantity" />
            <button onClick={handleSubmit}>ADD</button>

        </div>
    )
}

export default AuthForm