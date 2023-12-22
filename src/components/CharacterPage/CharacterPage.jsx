import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { useRickAndMortyCharacters } from '../../hooks/useRickAndMortyCharacters';
import "./_characterPage.scss"

const CharacterPage = () => {
  const { id } = useParams();
  const { characters, loading } = useRickAndMortyCharacters();

  const character = characters.find((char) => char.id === parseInt(id));

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!character) {
    console.log("Personaje no encontrado");
    return <p>Personaje no encontrado</p>;
  }

  console.log("Personaje: ", character);

  return (
    <div className="contenedorCharacterPage">
      <div className="contenedorReturnGetSch">
        <div className="contenedorInternoReturnGetSch">
          <div className="contenedorReturn">
            <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronLeft} />
            <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronLeft} />
            <span className="return">Return</span>
          </div>
          <div className="contenedorGet">
            <FontAwesomeIcon style={{ color: 'white' }} icon={faDice} />
            <span className="getSchwifty">Get Schwifty</span>
          </div>
        </div>
      </div>
      <div className="contenedorInfoCharacter">
        <div className="contenedorImgCharacter">
          <div className="imgCharacter">
            <img src={character.image} alt="characterImg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
