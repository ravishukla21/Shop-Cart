import { GETPRODUCTS, GET_REQUEST, PRODUCT_FAILURE } from "./actionTypes"

const initialState={
  isLoading:false,
  productData:[],
  isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
switch(type){
 case GET_REQUEST:{
    return{...state,isLoading:true}
 }
 case GETPRODUCTS:{
    return{...state,isLoading:false,productData:payload}
 }
 case PRODUCT_FAILURE:{
    return{...state,isLoading:false,isError:true}
 }
 default :{
    return state
 }
}
}