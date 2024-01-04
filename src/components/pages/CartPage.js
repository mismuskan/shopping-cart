// src/components/pages/CartPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/Style.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [showPopup, setShowPopup] = useState(false);

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleCheckout = () => {
    dispatch({ type: 'CLEAR_CART' });
    setShowPopup(true);
  };

  const handleOkClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <nav className="Nav">
        <Link to="/">Shopping Cart</Link>
        <div className="nav-links">
          <Link to="/">Homepage</Link>
          <Link to="/cart">CartPage</Link>
        </div>
      </nav>
      <h2 className="page-heading">My Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>No items added</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button className='removebtn' onClick={() => handleRemove(item.id)}>Remove from Cart</button>
              </div>
            ))
          )}
        </div>
        <div className="checkout-sidebar">
          <h3>Checkout</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} <span className='price'>${item.price}</span>
              </li>
            ))}
          </ul>
          <hr></hr>
          <p>Total Price: <span className='price'>${cartItems.reduce((total, item) => total + item.price, 0)}</span></p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Items have been checked out successfully!</p>
            <button onClick={handleOkClick}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
