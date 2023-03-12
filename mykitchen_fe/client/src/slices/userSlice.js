import {createSlice} from '@reduxjs/toolkit'

export const useSlice= createSlice({
    name:"user",
    initialState:{
        login: false,
        name: "",
        user_id: ""
    },
    reducers:{
        login:(state,action) =>{
            state.login = true
            state.name = action.payload.data.user_name
            state.user_id = action.payload.data.user_id
        },
        logout:(state)=>{
            state.login = false
            state.name = ""
            state.user_id = ""
        }
    }
})
export const{login,logout}=useSlice.actions
export default useSlice.reducer