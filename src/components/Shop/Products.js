import React from 'react';
import classes from './Products.module.css';
import ProductItem from './ProductItem'


const Products = (props) => {
  const dummy=[
    {
      id:'p1',
      price:6,
      title:'the first book',
      description:'best book of the first one'
    },
    {
      id:'p2',
      price:5,
      title:'the second book',
      description:'best book of the second one'
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map(product=>(       
         <ProductItem
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         description={product.description}
         />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
