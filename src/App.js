// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Conpo from './conpo'; // Asegúrate de la ruta correcta

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/otro" element={<Conpo token={token} />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>
    </Router>
  );
};

export default App;
