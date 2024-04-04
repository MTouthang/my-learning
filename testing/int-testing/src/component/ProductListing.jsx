import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button onClick={() => handleProductClick(product.id)}>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </div>
  );
};

export default ProductListing;
