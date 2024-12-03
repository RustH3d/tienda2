import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/styles.css';
import { Link } from 'react-router-dom'; 


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Error al obtener productos');
        const data = await response.json();
        setProducts(data); // Actualiza el estado con los productos
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1>Bienvenido a la tienda</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles.</p>
      )}

<div className="button-container">
        {/* Botón para ir al login */}
        <Link to="/login">
          <button className="home-button">Iniciar sesión</button>
        </Link>

        {/* Botón para ir al registro */}
        <Link to="/register">
          <button className="home-button">Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
