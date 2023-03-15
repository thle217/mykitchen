import { configureStore } from '@reduxjs/toolkit';
import commonSlice from "../slices/commonSlice";
import userSlice from '../slices/userSlice';

const rootReducer = {
    common: commonSlice,
    user: userSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;