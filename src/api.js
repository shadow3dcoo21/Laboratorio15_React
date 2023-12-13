// src/api.js
import axios from 'axios';

const fetchData = async (token) => {
  try {
    const response = await axios.get('http://localhost:8000/api/privado', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Respuesta:', response.data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export { fetchData };
