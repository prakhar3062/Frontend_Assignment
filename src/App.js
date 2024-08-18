import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartHeader from './components/CartHeader';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/cartContext';
import { CardHeader } from '@mui/material';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route 
            path="/cart" 
            element={
              <>
                <CartHeader />
                <CartPage />
              </>
            } 
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <ProductList />
              </>
            } 
          />
          <Route 
            path="/product" 
            element={
              <>
                <CartHeader />
                <ProductList />
              </>
            } 
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
