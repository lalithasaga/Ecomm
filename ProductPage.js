import React from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from './Store';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();

 
  const product = productsArr.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.price}</p>
      <p>Description: {product.description}Wall Paper</p>
      <p>Rating: {product.rating}5/5</p>
      
      <p>Size: {product.size}L</p>
      <p>Color: {product.color}MultiColour</p>
     
    </div>
  );
};

export default ProductPage;
