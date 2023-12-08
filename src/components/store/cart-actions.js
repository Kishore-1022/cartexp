import { uiActions } from './ui-slice';
import { cartActions  } from './cart-slice';

export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const res=await fetch('https://expcart-76eae-default-rtdb.firebaseio.com/cart.json')

            if(!res.ok){
                throw new Error('could not fetch the data')
            }
            const data=await res.json()
            return data
        }
        try{
            const cartData= await fetchData();
            dispatch(cartActions.replaceCart({
                items:cartData.items|| [],
                totalQuantity:cartData.totalQuantity,
            }))
        }catch(err){
            dispatch(uiActions.notificationHandler({
                status:'error',
                title:'Error!',
                message:'failed to send cart detials'
            }))       
        }
    }

}

export const sendCartData=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiActions.notificationHandler({
            status:'pending...',
            title:'sending...',
            message:'sending cart data!'
          }))

        const sendRequest=async()=>{
            const res=await fetch('https://expcart-76eae-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify({
                items:cart.items,
                totalQuantity:cart.totalQuantity
            }),
           })
            if(!res.ok){
            throw new Error('failed to send')
            } 

        } 
        try{
            await sendRequest();
            dispatch(uiActions.notificationHandler({
                status:'success...',
                title:'success!',
                message:'successfully'
            }))  
        }catch(err){  
            dispatch(uiActions.notificationHandler({
                status:'error',
                title:'Error!',
                message:'failed to send cart detials'
            }))       
        }     
    } 
}