import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn">
                Remove
              </button>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button className="btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
