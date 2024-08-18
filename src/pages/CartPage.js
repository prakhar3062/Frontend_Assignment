import React from 'react';
import { useCart } from '../context/cartContext';
import '../styles/cartPage.css'; 

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; 
    updateCartItemQuantity(id, newQuantity);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <input
                className=''
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
              />
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
