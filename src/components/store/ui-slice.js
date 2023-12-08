import {createSlice} from '@reduxjs/toolkit';
const ui=createSlice({
    name:'ui',
    initialState:{cart:false,notification:null},
    reducers:{
        toggle:(state)=>{
            state.cart=!state.cart
        },
        notificationHandler:(state,action)=>{
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }

        }
    }
})
export const uiActions=ui.actions
export  default ui