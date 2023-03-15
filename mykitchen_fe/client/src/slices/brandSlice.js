import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
    name: "brand",
    initialState: {},
    reducers: {
        setBrand(state, action) {
            return action.payload
        },
    },
});

const { actions, reducer } = brandSlice;
export const { setBrand } = actions;
export default reducer;