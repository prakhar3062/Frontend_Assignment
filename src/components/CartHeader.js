import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartHeader.css';

const CartHeader = () => {
  return (
    <header className="cart-header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">MyStore</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default CartHeader;
