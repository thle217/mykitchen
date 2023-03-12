import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/productSlice";
import userSlice from '../slices/userSlice';

const rootReducer = {
    product: productSlice,
    user:userSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;