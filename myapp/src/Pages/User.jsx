import React, { useEffect, useState } from 'react'
import { auth } from './config';

const User = () => {
    const [userName,setUserName]=useState("")


    useEffect(()=>{
       auth.onAuthStateChanged((user)=>{
            if(user){
               setUserName(user.displayName);
            }else{
              setUserName("");
            }
       })
    },[]);

  return [userName];
}

export default User;