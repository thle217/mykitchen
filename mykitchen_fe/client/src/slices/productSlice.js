import { createSlice } from "@reduxjs/toolkit";

const productSilce = createSlice({
    name: "product",
    initialState: {},
    reducers: {
        setProduct(state, action) {
            return action.payload
        },
    },
});

const { actions, reducer } = productSilce;
export const { setProduct } = actions;
export default reducer;