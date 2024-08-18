import React, { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";
import { useCart } from '../context/cartContext';
import '../styles/productList.css'
const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching the product data:', error));
  }, []);
  console.log(products)
  return (
    <div className='prodcut-container'>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
