import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import './styles/styles.css';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { AuthProvider } from './Contexts/AuthContext'; // Importamos el contexto
import Profile from './pages/Profile'; // Página de perfil para usuarios autenticados



function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} /> {/* Página de perfil */}
        <Route path="/dashboard" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
