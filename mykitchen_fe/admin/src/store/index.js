import { configureStore } from '@reduxjs/toolkit';
import commonSlice from "../slices/commonSlice";

const rootReducer = {
    common: commonSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;