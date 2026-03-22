
import {createSlice} from '@reduxjs/toolkit';
import Contact from '../pages/Contact';

const initialState = {
    user :[],
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
        setUser:(state , action) =>{
            state.user = [...state.user , action.payload];
        },
        deleteUser:(state,action) =>{
            state.user = state.user.filter(
                (user, index) => index !== action.payload
            );
        },
    },
})


export const {setUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;