import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {},
    reducers: {
        setCategory(state, action) {
            return action.payload
        },
    },
});

const { actions, reducer } = categorySlice;
export const { setCategory } = actions;
export default reducer;