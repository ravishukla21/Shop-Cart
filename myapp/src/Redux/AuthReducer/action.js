import { GETPRODUCTS, GET_REQUEST, PRODUCT_FAILURE } from "./actionTypes"
import axios from "axios"
export const getProducts=(paramsObj,)=>{
    // console.log(totalButtons)
    return async(dispatch)=>{
        dispatch({type:GET_REQUEST})
        let res=await axios.get(`https://v7wd21.sse.codesandbox.io/products?_limit=12`,paramsObj)
        console.log(res)
        dispatch({type:GETPRODUCTS,payload:res.data})
        dispatch({type:PRODUCT_FAILURE})
    }
}