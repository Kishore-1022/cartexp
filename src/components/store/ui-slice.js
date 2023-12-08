import {createSlice} from '@reduxjs/toolkit';
const ui=createSlice({
    name:'ui',
    initialState:{cart:false},
    reducers:{
        toggle:(state)=>{
            state.cart=!state.cart
        }
    }
})
export const uiActions=ui.actions
export  default ui