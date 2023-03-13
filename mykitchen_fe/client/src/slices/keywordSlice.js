import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
    name: "keyword",
    initialState: "",
    reducers: {
        setKeyword(state, action) {
            return action.payload
        },
    },
});

const { actions, reducer } = keywordSlice;
export const { setKeyword } = actions;
export default reducer;