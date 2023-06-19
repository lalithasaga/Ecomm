import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="CartItem">
      <img src={item.imageUrl} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;