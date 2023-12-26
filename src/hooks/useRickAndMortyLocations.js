import { useState, useEffect } from 'react';

const useRickAndMortyLocations = () => {
  const [locations, setLocations] = useState([]);
  const [firstLocations, setFirstLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        let allLocations = [];
        let page = 1;
        let data; 
        do {
          const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
          
          if (!response.ok) {
            throw new Error('Error fetching data');
          }

          data = await response.json();  // Asignar el valor a data
          allLocations = allLocations.concat(data.results);
          page++;

        } while (page <= data.info.pages);

        setLocations(allLocations);
        setFirstLocations(allLocations[0])
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLocations();
  }, []); 

  return { locations, firstLocations, loading, error };
};

export default useRickAndMortyLocations;
