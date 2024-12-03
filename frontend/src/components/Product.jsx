import React, { useState } from 'react';
import axios from 'axios';


const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem('token');

  const handleAddToCart = () => {
    if (!token) {
      alert('You must be logged in to add items to the cart');
      return;
    }

    if (quantity <= 0) {
      alert('Quantity must be greater than 0');
      return;
    }

    axios.post('http://localhost:3000/cart', {
      product_id: product.product_id,
      quantity,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      alert('Product added to cart');
    })
    .catch(error => {
      console.error('Error adding product to cart:', error);
    });
  };

  return (
    <div className="product-item">
      <h2>{product.product_name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      {product.image_url?.length > 0 && (
        <img src={`http://localhost:3000${product.image_url[0]}`} alt={product.product_name} />
      )}
      <div className="quantity">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          min="1"
        />
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
