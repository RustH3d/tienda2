// src/Contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Creamos el contexto
export const AuthContext = createContext();

// Componente proveedor de contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Comprobamos si hay una sesión activa (puedes usar localStorage, sessionStorage, o cookies)
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true); // Si hay token, se considera autenticado
    }
  }, []);

  // Función para iniciar sesión
  const login = (token) => {
    localStorage.setItem('auth_token', token); // Guarda el token en localStorage
    setIsAuthenticated(true); // Cambia el estado de autenticación
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('auth_token'); // Elimina el token de localStorage
    setIsAuthenticated(false); // Cambia el estado de autenticación
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
