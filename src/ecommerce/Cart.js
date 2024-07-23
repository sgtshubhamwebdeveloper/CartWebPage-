// src/Cart.js

import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1001, name: 'NPAV AntiVirus', originalPrice: 599.00, discountedPrice: 587.02 },
    { id: 1002, name: 'McAfee', originalPrice: 799.00, discountedPrice: 783.02 },
    { id: 1003, name: 'NPAV AntiVirus Pro', originalPrice: 799.00, discountedPrice: 787.02 },
    { id: 1004, name: 'EVM SSd 128GB', originalPrice: 995.00, discountedPrice: 976.02 },
    { id: 1005, name: 'Matrix SSd 256GB', originalPrice: 1199.00, discountedPrice: 1182.02 },
    { id: 1006, name: 'Mouse', originalPrice: 299.00, discountedPrice: 289.02 },
    { id: 1007, name: 'Sony Headfone Wired', originalPrice: 699.00, discountedPrice: 689.02 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);
  const deliveryCharge = 40;
  const totalPrice = total + deliveryCharge;

  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div>ID: {item.id}</div>
          <div>{item.name}</div>
          <div>Original Price: Rs. {item.originalPrice.toFixed(2)}</div>
          <div>Discounted Price: Rs. {item.discountedPrice.toFixed(2)}</div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <div>Total Items: {cartItems.length}</div>
        <div>Total Price: Rs. {total.toFixed(2)} + Rs. {deliveryCharge} (including Rs. {deliveryCharge} delivery charge) = {totalPrice.toFixed(2)}</div>
        {/* <button className="checkout-button stripe">Checkout</button> */}
        <button className="checkout-button ccavenue">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
