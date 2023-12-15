import { useState, useEffect } from 'react';

export const useFetch = (currentPage) => {
  const [informacion, setInformacion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const data = await response.json();
      setInformacion(data);
    } catch (error) {
      setError('Error al obtener datos de la API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return { informacion, loading, error,  };
};
