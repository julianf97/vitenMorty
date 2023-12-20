import { useState, useContext, useEffect } from 'react';
import "./_characters.scss";
import Filter from "../Filter/Filter";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import { useFetch } from "../../hooks/useFetch";
import { FilterContext } from "../../context/FilterContext";
import { useRickAndMortyCharacters } from "../../hooks/useRickAndMortyCharacters.js";
import Paginacion from "../Paginacion/Paginacion.jsx";
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Footer from "../Footer/Footer.jsx"

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const { informacion, loading, error } = useFetch(currentPage);
  const { filters, setDisablePagination, disablePagination, valueInput, setValueInput } = useContext(FilterContext);
  const { characters } = useRickAndMortyCharacters();
  const [characterToSearch, setCharacterToSearch] = useState('');

  const apiResults = informacion?.results || [];

  useEffect(() => {
    const noSearchNoFilters = !valueInput && !hasActiveFilters();
    setDisablePagination(noSearchNoFilters);
  }, [valueInput, filters, setDisablePagination]);

  useEffect(() => {
    const allFiltersInactive = Object.keys(filters).every(category => {
      return Object.values(filters[category]).every(value => value === false);
    });

    const charactersToUse = allFiltersInactive ? apiResults : characters;
    const shouldDisablePagination = allFiltersInactive && !valueInput;

    setDisablePagination(!shouldDisablePagination);

    const filteredCharacters = (valueInput || !allFiltersInactive)
      ? charactersToUse.filter(character => filterCharacter(character)).filter(character => searchFilter(character))
      : apiResults;

    setFilteredCharacters(filteredCharacters);
  }, [apiResults, characters, filters, valueInput]);

  const hasActiveFilters = () => {
    return Object.keys(filters).some(category => {
      return Object.values(filters[category]).some(value => value);
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleInputChange = (e) => {
    setValueInput(e.target.value);
    setCharacterToSearch('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterToSearch(valueInput);
  };

  const filterCharacter = (character) => {
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
  };

  const searchFilter = (character) => {
    if (valueInput) {
      return character.name.toLowerCase().includes(valueInput.toLowerCase());
    }
    return true;
  };

  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const charactersToUse = (valueInput || hasActiveFilters()) ? characters : apiResults;
    const filteredCharacters = charactersToUse
      .filter(character => filterCharacter(character))
      .filter(character => searchFilter(character));

    setFilteredCharacters(filteredCharacters);
  }, [apiResults, characters, filters, valueInput]);

  return (
    <>
    <div className='contenedorPrincipalCharacters'>
      <div className='contenedorSearch'>
        <div className='contenedorInternoSearch'>
          <div className='contenedorTitulo'>
            <h2>Characters</h2>
          </div>
          <form className="contenedorForm" onSubmit={handleSubmit}>
            <div className='contenedorInput'>
              <input
                type='search'
                onChange={handleInputChange}
                value={valueInput}
                name="search"
                placeholder='Search for a character'
              />
              <button className='submitSearch' type='submit'>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='contenedorDosSecciones'>
        <Filter />
        <div className='contenedorPersonajes'>
          <div className='contenedorInternoPersonajes'>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {filteredCharacters && filteredCharacters.length > 0 ? (
              filteredCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  gender={character.gender}
                  name={character.name}
                  status={character.status}
                  location={character.location}
                  episode={character.episode}
                  image={character.image}
                />
              ))
            ) : (
              <NotFoundPage />
            )}
          </div>
        </div>
      </div>
      {disablePagination ? <></> : <Paginacion currentPage={currentPage} onPageChange={handlePageChange} />}
    </div>
    <Footer/>
    </>
  );
}