import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ My Shop</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default App;
