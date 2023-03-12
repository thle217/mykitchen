import { createSlice } from "@reduxjs/toolkit";

//COMMONSLICE DÙNG CHUNG CHO BRAND VÀ CATEGORY
const commonSlice = createSlice({
    name: "common",
    initialState: {},
    reducers: {
        setInfo(state, action) {
            return action.payload;
        },
    },
});

const { actions, reducer } = commonSlice;
export const { setInfo } = actions;
export default reducer;
