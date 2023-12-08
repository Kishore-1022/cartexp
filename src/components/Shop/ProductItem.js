import Card from '../UI/Card';
import React from 'react';
import classes from './ProductItem.module.css';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  
  const { title, price, description,id } = props;
  const dispatch=useDispatch();
  console.log(price)
   
  const addHandler=()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
    }))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;