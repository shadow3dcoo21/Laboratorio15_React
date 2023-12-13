import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: username,
        password: password,
      });

      const token = response.data.access;
      setToken(token);
    } catch (error) {
      console.error('Error de inicio de sesión:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
