// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Cerramos sesión
    navigate('/'); // Redirigimos a la página pública o de login
  };

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Dashboard</h1>
      <p>Accede a nuestras funciones principales:</p>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/profile')}>Mi Perfil</button>
        <button onClick={() => navigate('/catalog')}>Ver Productos</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Dashboard;
