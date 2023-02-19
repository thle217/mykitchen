import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {},
    reducers: {
        updateProduct(state, action) {
            return action.payload
        },
    },
});

const { actions, reducer } = productSlice;
export const { updateProduct } = actions;
export default reducer;