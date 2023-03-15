import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/productSlice";
import userSlice from '../slices/userSlice';
import keywordSlice from '../slices/keywordSlice';
import categorySlice from '../slices/categorySlice';
import brandSlice from '../slices/brandSlice';


const rootReducer = {
    product: productSlice,
    user: userSlice,
    keyword: keywordSlice,
    category: categorySlice,
    brand: brandSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;