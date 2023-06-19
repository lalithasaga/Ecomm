import React from 'react';
import { Link } from 'react-router-dom';
import './Store.css';
import { CartContext } from './CartContext';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: '$12.99',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: '$14.99',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: '$9.99',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: '$19.99',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Store = () => (
  <div className="store">
    <p className="store__music">Music</p>
    <CartContext.Consumer>
      {({ cart, addToCart }) => (
        <>
          <div className="store__row">
            {productsArr.slice(0, 2).map((product, index) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="store__row">
            {productsArr.slice(2, 4).map((product, index) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </>
      )}
    </CartContext.Consumer>
    <Link to="/cart">See the cart</Link>
  </div>
);

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="store__product">
      <h3>{product.title}</h3>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.title} />
      </Link>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export { Store, productsArr };