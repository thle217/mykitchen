import {createSlice} from '@reduxjs/toolkit'

export const useSlice= createSlice({
    name:"user",
    initialState:{
        login:false,
        name:""
        
    },
    reducers:{
        login:(state,action) =>{
            state.login=true
            state.name=action.payload.data.user_name
                },
        logout:(state)=>{
            state.login=false
        }

    }
})
export const{login,logout}=useSlice.actions
export default useSlice.reducer