import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // Estado para almacenar datos del usuario

  useEffect(() => {
    // Simulación de llamada a la API para obtener información del usuario
    const fetchData = async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        console.error('No se encontró un token de autenticación');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener datos del usuario');
        }

        const data = await response.json();
        setUserData(data); // Guardar datos del usuario en el estado
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenido al Dashboard</h1>
      {userData ? (
        <div>
          <p>Usuario: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default Dashboard;
