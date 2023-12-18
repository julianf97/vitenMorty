import { useState, useContext } from 'react';
import "./_characters.scss";
import Filter from "../Filter/Filter";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import { useFetch } from "../../hooks/useFetch";
import { FilterContext } from "../../context/FilterContext";
import {useRickAndMortyCharacters}  from "../../hooks/useRickAndMortyCharacters.js"
import Paginacion from "../Paginacion/Paginacion.jsx";

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const { informacion, loading, error } = useFetch(currentPage);
  const { filters, setDisablePagination } = useContext(FilterContext);
  const { characters } = useRickAndMortyCharacters()

  console.log(characters)

  const apiResults = informacion.results;

  let allFiltersInactive = Object.keys(filters).every(category => {
    return Object.values(filters[category]).every(value => value === false);
  });

  if(!allFiltersInactive){
    setDisablePagination(true)
  }

  const charactersToUse = allFiltersInactive ? apiResults : characters

  const filteredCharacters = charactersToUse && charactersToUse.filter((character) => {
    const passesStatusFilter =
      (!filters.status.alive || character.status.toLowerCase() === 'alive') &&
      (!filters.status.dead || character.status.toLowerCase() === 'dead') &&
      (!filters.status.unknown || character.status.toLowerCase() === 'unknown');
  
    const passesSpeciesFilter = filters.species.MythologicalCreature
      ? character.species.toLowerCase() === 'mythological creature'
      : Object.keys(filters.species).every(species =>
          !filters.species[species] || character.species.toLowerCase() === species.toLowerCase()
        );
  
    const passesGenderFilter =
      (!filters.gender.female || character.gender.toLowerCase() === 'female') &&
      (!filters.gender.male || character.gender.toLowerCase() === 'male') &&
      (!filters.gender.genderless || character.gender.toLowerCase() === 'genderless') &&
      (!filters.gender.unknown || character.gender.toLowerCase() === 'unknown');
  
    return passesStatusFilter && passesSpeciesFilter && passesGenderFilter;
  });


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
            {filteredCharacters && filteredCharacters.map((character) => (
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
