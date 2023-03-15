import { createSlice } from '@reduxjs/toolkit'

export const useSlice= createSlice({
    name:"user",
    initialState:{
        login: false,
        name: "",
        username: "",
        user_id: "",
        role_id: ""
    },
    reducers:{
        login:(state,action) =>{
            state.login = true
            state.name = action.payload.user_name
            state.username = action.payload.username
            state.user_id = action.payload.user_id
            state.role_id = action.payload.role_id
        },
        logout:(state)=>{
            state.login = false
            state.name = ""
            state.username = ""
            state.user_id = ""
            state.role_id = ""
        }
    }
})
export const{ login,logout }=useSlice.actions
export default useSlice.reducer