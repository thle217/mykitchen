import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/Products/index";

const rootReducer = {
    product: productSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;