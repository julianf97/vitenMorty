import { useState, useEffect } from 'react';

const useRickAndMortyCharacters = (isStatusAliveFilterActive) => {
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
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          const filteredCharacters = isStatusAliveFilterActive
            ? data.results.filter((character) => character.status === "Alive")
            : data.results;

          allCharacters = allCharacters.concat(filteredCharacters);

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
  }, [isStatusAliveFilterActive]);

  return { characters, loading, error };
};

export { useRickAndMortyCharacters };