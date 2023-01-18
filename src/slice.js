import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
    name:"theme",
    initialState:{
        changer:"true"
    },
    reducers:{
        setChanger:(initialState,action) =>{
            initialState.changer = action.payload;
        }
    }
})

export const{setChanger} = theme.actions
export default theme.reducer;