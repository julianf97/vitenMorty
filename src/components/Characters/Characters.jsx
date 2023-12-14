import "./_characters.scss";
import Filter from "../Filter/Filter";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import { useFetch } from "../../hooks/useFetch";

export default function Characters() {
  const { informacion, loading, error } = useFetch();
  const apiResults = informacion.results;
  
  console.log(apiResults)

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
    </div>
  );
}