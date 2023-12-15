import { useState, useEffect } from 'react';
import "./_characters.scss";
import Filter from "../Filter/Filter";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import { useFetch } from "../../hooks/useFetch";
import Paginacion from "../paginacion/Paginacion";

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const { informacion, loading, error } = useFetch(currentPage);

  const apiResults = informacion.results;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='contenedorPrincipalCharacters'>
      <div className='contenedorSearch'>
        <div className='contenedorInternoSearch'>
          <div className='contenedorTitulo'>
            <h2>Characters</h2>
          </div>
          <div className='contenedorInput'>
            <input type='search' placeholder='Search for a character'></input>
            <button className='submitSearch' type='submit'>Search</button>
          </div>
        </div>
      </div>
      <div className='contenedorDosSecciones'>
        <Filter />
        <div className='contenedorPersonajes'>
          <div className="contenedorInternoPersonajes">
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {apiResults && apiResults.map((character) => (
              <CharacterCard 
                key={character.id}
                gender={character.gender}
                name={character.name}
                status={character.status}
                location={character.location}
                episode={character.episode}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Paginacion currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}