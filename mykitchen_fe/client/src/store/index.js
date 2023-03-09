import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/productSlice";

const rootReducer = {
    product: productSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;