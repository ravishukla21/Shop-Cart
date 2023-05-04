import React, { useEffect, useState } from 'react'
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth"
import Home from './Home';

const Login = () => {
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
   const [value,setValue]=useState("");

    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
              setValue(data.user.email)
              localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem("email"));

    },[])

  return (
    <div>
        {/* <form>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text"  placeholder='Password' value={password} onChange={(e)=>setPasswordl(e.target.value)}/>
            <button>Log In</button>
        </form> */}
        {value?<Home/>:<button onClick={handleClick}>SignIn with Google</button>}
    </div>
  )
}

export default Login;
