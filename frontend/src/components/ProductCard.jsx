import React from 'react';
import '../styles/styles.css';



const ProductCard = ({ product }) => {
  const { product_name, description, price, image_url } = product;

  return (
    <div className="product-card">
      {image_url && image_url.length > 0 && (
        <img
          src={image_url[0]} // Muestra la primera imagen del array
          alt={product_name}
          className="product-image"
        />
      )}
      <h2>{product_name}</h2>
      <p>{description}</p>
      <p>Precio: ${Number(price).toFixed(2)}</p> {/* Convertimos el precio a número */}
    </div>
  );
};

export default ProductCard;
