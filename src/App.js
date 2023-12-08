import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';

let initial=true

function App() {
  const showCart =useSelector((state)=>state.ui.cart)
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.ui.notification)

  useEffect(()=>{
    const sendCartData=async()=>{
        dispatch(uiActions.notificationHandler({
          status:'pending...',
          title:'sending...',
          message:'sending cart data!'
        }))
        const res=await fetch('https://expcart-76eae-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart),
        })

      if(!res.ok){
        throw new Error('failed to send')
      } 
      dispatch(uiActions.notificationHandler({
        status:'success...',
        title:'success!',
        message:'successfully'
      }))
    }

    if(initial){
      initial=false;
      return;
    }

    sendCartData().catch(err=>{
      dispatch(uiActions.notificationHandler({
        status:'error',
        title:'Error!',
        message:'failed to send cart detials'
      }))
    }) 
  },[cart,dispatch])

  return (
    <>
    {notification&&(
      <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />
    )}
    <Layout>

      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
