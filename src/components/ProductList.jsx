import React from 'react';

const products = [
  { id: 1, name: 'T-Shirt', price: 15 },
  { id: 2, name: 'Shoes', price: 40 },
  { id: 3, name: 'Cap', price: 10 },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <h2>🛒 Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <strong>{product.name}</strong> - ${product.price}
          <button style={{ marginLeft: '10px' }} onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
