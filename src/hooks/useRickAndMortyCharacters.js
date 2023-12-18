import { useState, useEffect } from 'react';

const useRickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        let allCharacters = [];
        let nextPage = "https://rickandmortyapi.com/api/character";

        do {
          const response = await fetch(nextPage);

          if (!response.ok) {
            throw new Error("La respuesta de la red no fue satisfactoria");
          }

          const data = await response.json();
          allCharacters = allCharacters.concat(data.results);

          nextPage = data.info.next;
        } while (nextPage);

        setCharacters(allCharacters);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  return { characters, loading, error };
};

export { useRickAndMortyCharacters };