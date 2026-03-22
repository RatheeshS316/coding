import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null,
}

export const userSlice = createSlice({
    name:"user",                //initialstate and userSlice both user are different 
    initialState,
    reducers:{

        setUser:(state,action)=>{
            // state.user = [...state.user,  action.payload];   dont do this idhu add pannum
            state.user = action.payload;
        },
        removeUser:(state,action)=>{
            state.user=null;
        },
    },
})

export const {setUser , removeUser} = userSlice.actions;
export default userSlice.reducer;