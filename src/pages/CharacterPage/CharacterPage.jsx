import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHeartPulse, faMars, faVenus, faLocationDot, faQuestion, faDice, faSkull } from "@fortawesome/free-solid-svg-icons";
import { useRickAndMortyCharacters } from '../../hooks/useRickAndMortyCharacters';
import { useEffect } from 'react';
import "./_characterPage.scss";
import { useState } from 'react';

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate ();
  const { characters, loading } = useRickAndMortyCharacters();
  const [episodes, setEpisodes] = useState(null);
  const [episodesLoading, setEpisodesLoading] = useState(null);

  const { getRandomCharacter } = useRickAndMortyCharacters();

  const handleGetRandomCharacter = () => {
    const randomCharacter = getRandomCharacter();
    if (randomCharacter) {
      navigate(`/characters/${randomCharacter.id}`);
    }
  };


  const character = characters.find((char) => char.id === parseInt(id));


  useEffect(() => {
    if (character && character.episode) {
      const fetchEpisodes = async () => {
        try {
          const episodeResponses = await Promise.all(
            character.episode.map((episodeUrl) => fetch(episodeUrl).then((res) => res.json()))
          );
          setEpisodes(episodeResponses);
          setEpisodesLoading(false);
        } catch (error) {
          console.error('Error fetching episodes:', error);
          setEpisodes([]);
          setEpisodesLoading(false);
        }
      };

      fetchEpisodes();
    }
  }, [character]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!character) {
    console.log("Personaje no encontrado");
    return <p>Personaje no encontrado</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div className="contenedorCharacterPage">
      <div className="contenedorReturnGetSch">
        <div className="contenedorInternoReturnGetSch">
          <div className="contenedorReturn">
            <FontAwesomeIcon onClick={handleGoBack} style={{ color: 'white', cursor: "pointer" }} icon={faChevronLeft} />
            <FontAwesomeIcon onClick={handleGoBack} style={{ color: 'white', cursor: "pointer" }} icon={faChevronLeft} />
            <span onClick={handleGoBack} className="return">Return</span>
          </div>
          <div className="contenedorGet">
            <FontAwesomeIcon onClick={handleGetRandomCharacter}  style={{ color: 'white', cursor: "pointer" }} icon={faDice} />
            <span onClick={handleGetRandomCharacter}  className="getSchwifty">Get Schwifty</span>
          </div>
        </div>
      </div>
      <div className="contenedorInfoCharacter">
        <div className="contenedorImgCharacter">
          <div className="imgCharacter">
            <img src={character.image} alt="characterImg" />
          </div>
        </div>
        <div className="contenedorNombreCharacter">
          <h1> {character.name} </h1>
        </div>
        <div className="contenedorStatus">
          {character.status === "Alive" && (
            <FontAwesomeIcon
              style={{ color: "#11b711", marginRight: "6px", fontSize: "30px", paddingTop: "10px" }}
              icon={faHeartPulse}
            />
          )}

          {character.status === "Dead" && (
            <FontAwesomeIcon
              style={{ color: "#D42A34", fontSize: "25px", marginTop: "6px", marginRight: "10px" }}
              icon={faSkull}
            />
          )}

          {character.status === "unknown" && (
            <FontAwesomeIcon
              style={{ color: "#ffffff", fontSize: "25px", marginTop: "6px", marginRight: "10px" }}
              icon={faQuestion}
            />
          )}

        <h3> -  {character.status}  </h3>
        </div>
        <div className="contenedorGenderSpeciesType">
          <div className="contenedorInternoGenderSpeciesType">
            <div className="contenedorGender">
              <h3> Gender: </h3>
              {character.gender === "Male" ? (
                <FontAwesomeIcon
                  style={{ color: "#6B9FDA", fontSize: "25px", marginTop: "6px", marginLeft: "10px" }}
                  icon={faMars}
                />
              ) : character.gender === "Female" ? (
                <FontAwesomeIcon
                  style={{ color: "#DA70D6", fontSize: "25px", marginTop: "6px", marginLeft: "10px" }}
                  icon={faVenus}
                />
              ) : (
                <FontAwesomeIcon
                  style={{ color: "#ffffff", fontSize: "25px", marginTop: "6px", marginLeft: "10px" }}
                  icon={faQuestion}
                />
              )}
              <h3 className="gender"> {character.gender} </h3>
            </div>
            <div className="contenedorSpecies">
              <h3> Species: </h3>
              <h3 className="species"> {character.species} </h3>
            </div>
            <div className="contenedorLastKnow">
              <h3> Last Know Location: </h3>
              <div className="flexLastKnow">
                <FontAwesomeIcon style={{ color: "#D42A34", fontSize: "25px", marginTop: "6px" }} icon={faLocationDot} />
                <h3 className="lastKnow"> {character.location.name} </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredIn">
          <h4 className="titulo">Featured In:</h4>
          <div className="contenedorEpisode">
            {episodesLoading && <p>Cargando episodios...</p>}
            {!episodesLoading && episodes && episodes.map((episode, index) => (
              <div key={index}>
                <h6>{episode.name}</h6>
                <h6 className="subtitulo">{episode.air_date}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
