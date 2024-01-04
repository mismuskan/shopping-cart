// src/components/CartItem.js

import React from 'react';

const CartItem = ({ item, handleRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <button onClick={() => handleRemove(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
