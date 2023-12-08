import {createSlice} from '@reduxjs/toolkit';
const cart=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,  
     },
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.items.find(item=>item.id===newItem.id )
            
            if (!existingItem){
                state.items.push({
                    id:newItem.id,        
                    quantity:1,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            }else{  
                existingItem.quantity++
                existingItem.totalprice=existingItem.totalPrice+newItem.price
            }
            
            state.totalQuantity++;
           
        },
        removeItem:(state,action)=>{
            const id =action.payload;
            const existingItem=state.items.find(item=>item.id===id)
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id!==id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price
            }
            state.totalQuantity--;
        }

        
    }
})
export const cartActions=cart.actions
export  default cart