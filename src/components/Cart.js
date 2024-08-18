import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price.toFixed(2)}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
