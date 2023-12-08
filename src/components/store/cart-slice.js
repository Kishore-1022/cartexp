import {createSlice} from '@reduxjs/toolkit';


const cart=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        change:false
     },
    reducers:{
        replaceCart:(state,action)=>{
          state.totalQuantity=action.payload.totalQuantity;
          state.items=action.payload.items
        },
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
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
            
            state.totalQuantity++;
            state.change=true
           
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
            state.change=true
        }

        
    }
})



export const cartActions=cart.actions
export  default cart