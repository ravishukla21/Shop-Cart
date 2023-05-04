import React from 'react';
import { PRODUCT_REQUEST, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from './actionTypes';
const initialState = {
  todos:[],
  isLoading: false,
  isError: false,


}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true, isError: false }
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, todos: payload }
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] }
    case PATCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] }
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, todos: payload }
    default:
      return state;

  }
}

