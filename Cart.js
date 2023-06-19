import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleCloseCart = () => {
    navigate('/store'); 
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart__item">
              <img src={item.imageUrl} alt={item.title} className="cart__item-image" />
              <div className="cart__item-details">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button
                className="cart__item-remove"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart__actions">
            <button className="cart__close" onClick={handleCloseCart}>
              Close
            </button>
            <button className="cart__order">Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;