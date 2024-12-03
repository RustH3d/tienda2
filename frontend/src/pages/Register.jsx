import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 6) {
      setError('Username must be at least 6 characters long.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    axios.post('http://localhost:3000/register', { username, password, email })
      .then(response => {
        navigate('/login');
      })
      .catch(error => {
        console.error('Error registering:', error);
        setError('Registration failed.');
      });
  };

  return (
    <div className="auth-container">
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          minLength="8"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          minLength="8"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="btn-register">Register</button>
    </form>
  </div>
  );
};

export default RegisterPage;
