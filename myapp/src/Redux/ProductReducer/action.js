import { PRODUCT_REQUEST, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from './actionTypes';
import axios from "axios";

export const addproduct = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.post(" http://localhost:8080/products", obj).then((res) => {
    console.log(res.data, "rsdadsffa")
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data })

  }).catch((err) => {
    dispatch({ type: PRODUCT_FAILURE })
  })

}

export const getproduct = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.get(`
  http://localhost:8080/products
  `).then((res) => {
    console.log(res.data, "datagetinaction");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })


  }).catch((err) => {
    dispatch({ type: PRODUCT_FAILURE })

  })

};

export const updateproduct =(id, quantity)=>(dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.patch(
    ` http://localhost:8080/products/${id}`,quantity
  ).then((res)=>{console.log(res.data,"patchthedata")}
  
  
  
  
  ).catch((err) => {
    dispatch({ type: PRODUCT_FAILURE })
  })
  

};

export const deleteproduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.delete(`  http://localhost:8080/products/${id}`).then((res) => {
    console.log(res, "deletehoga")
    dispatch(getproduct());
    
  }).catch((err) => {
    dispatch({ type: PRODUCT_FAILURE })
  })





};  