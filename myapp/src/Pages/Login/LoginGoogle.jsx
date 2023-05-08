import React, { useEffect, useState } from 'react'
import {auth,provider} from "../config";
import {signInWithPopup} from "firebase/auth"
import HomePage from "../HomePage";

const LoginGoogle = () => {
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
        {<button onClick={handleClick}>SignIn with Google</button>}
    </div>
  )
}

export default LoginGoogle;