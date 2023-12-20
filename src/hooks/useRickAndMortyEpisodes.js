import { useState, useEffect } from 'react';

const useRickAndMortyEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        let allEpisodes = [];
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages) {
          const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
          if (!response.ok) {
            throw new Error('Error al cargar los episodios');
          }
          const data = await response.json();
          allEpisodes = allEpisodes.concat(data.results);
          totalPages = data.info.pages;
          page++;
        }

        // Organizar los episodios por temporada
        const episodesBySeason = allEpisodes.reduce((acc, episode) => {
          const { episode: episodeNumber } = episode;
          const seasonMatch = episodeNumber.match(/S(\d+)E\d+/);

          if (seasonMatch) {
            const season = `S${seasonMatch[1]}`;
            if (!acc[season]) {
              acc[season] = [];
            }
            acc[season].push(episode);
          }

          return acc;
        }, {});

        // Convertir el objeto de temporadas a un array de objetos
        const seasonsArray = Object.entries(episodesBySeason).map(([season, episodes]) => ({
          season,
          episodes,
        }));

        setEpisodes(seasonsArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return { episodes, loading, error };
};

export default useRickAndMortyEpisodes;