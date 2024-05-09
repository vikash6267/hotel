import { createSlice } from "@reduxjs/toolkit";
const initialState={
    guestuser:"",
    guestauth:false
}

const guestloginSlice=createSlice({
    name:"guestlogin",
    initialState:initialState,
    reducers:{
        guestlogin: (state, action) => {
          //console.log(action.payload);
            state.guestuser = action.payload.guestnm;
            state.guestauth = true;
            
          },
          guestlogout: (state) => {
            state.guestuser = null;
            state.guestauth = false;
          },
    }
});


export const {guestlogin, guestlogout} = guestloginSlice.actions;
export default guestloginSlice.reducer;