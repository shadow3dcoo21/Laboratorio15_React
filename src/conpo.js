// src/compo.js
import React, { useEffect } from 'react';
import { fetchData } from './api'; // Ruta directa al archivo

const OtroComponente = ({ token }) => {
  useEffect(() => {
    fetchData(token);
  }, [token]);

  return <div>Otro contenido</div>;
};

export default OtroComponente;

