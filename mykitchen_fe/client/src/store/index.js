import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/productSlice";
import userSlice from '../slices/userSlice';
import keywordSlice from '../slices/keywordSlice';


const rootReducer = {
    product: productSlice,
    user: userSlice,
    keyword: keywordSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;