import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import axios from 'axios';
import './Login.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar errores
  const navigate = useNavigate(); // Inicializa navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Resetea mensajes de error previos

    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      console.log('Login exitoso:', response.data);

      // Guardar el token en localStorage
      localStorage.setItem('auth_token', response.data.token);

      // Invocar `onLogin` si está definido
      if (onLogin) {
        onLogin(response.data);
      }

      // Redirige al Dashboard
      navigate('/dashboard');

      // Limpia los campos después del inicio de sesión
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data || error.message);

      // Establece un mensaje de error basado en la respuesta del servidor
      setErrorMessage(error.response?.data?.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar Sesión</h2>
        
        {/* Campo para usuario */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Campo para contraseña */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Botón para iniciar sesión */}
        <button type="submit">Iniciar Sesión</button>

        {/* Mostrar error en caso de fallo */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
