import React from 'react';
import { legacy_createStore,applyMiddleware,
combineReducers } from 'redux';
import thunk from "redux-thunk";
import {reducer as AuthReducer} from  "./AuthReducer/reducer"
import {reducer as ProductReducer} from './ProductReducer/reducer';

const rootReducer=combineReducers({
ProductReducer,AuthReducer
    
})

const store =legacy_createStore (rootReducer,applyMiddleware(thunk));

export default store