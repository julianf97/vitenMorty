import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [informacion, setInformacion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setInformacion(data);
      } catch (error) {
        setError('Error al obtener datos de la API.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { informacion, loading, error };
};