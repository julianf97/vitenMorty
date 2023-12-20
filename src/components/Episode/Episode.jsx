import "./_episode.scss";
import { useState, useEffect } from "react";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import useRickAndMortyEpisodes from "../../hooks/useRickAndMortyEpisodes";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import Footer from "../Footer/Footer";


export default function Episode() {
  const { episodes } = useRickAndMortyEpisodes();
  const [titleEpisode, setTitleEpisode] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [onAirEpisode, setOnAirEpisode] = useState(null);
  const [selectedEpisodeData, setSelectedEpisodeData] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (selectedEpisodeData) {
      const fetchCharacters = async () => {
        const charactersData = await Promise.all(
          selectedEpisodeData.characters.map(async (characterUrl) => {
            const response = await fetch(characterUrl);
            const character = await response.json();
            return character;
          })
        );
        setCharacters(charactersData);
      };

      fetchCharacters();
    }
  }, [selectedEpisodeData]);

  const selectStyles = {
    backgroundColor: "#222",
    color: "#bfde42",
    boxShadow: "none",
    padding: "0px",
  };
  const selectSectionStyles = {
    backgroundColor: "#ffff",
    color: "#000000",
    boxShadow: "#bfde42",
  };

  const handleSelectChange = (selectedValue) => {
    const selectedSeason = selectedValue.substring(0, 3);
    const selectedEpisode = selectedValue.substring(3);
    const selectedSeasonData = episodes.find((season) => season.season === selectedSeason);
    const arrayEpisodes = selectedSeasonData.episodes;
    const selectedEpisodeData = arrayEpisodes.find((episode) => episode.name === selectedEpisode);

    console.log(selectedEpisodeData.characters);

    const selectedDateData = selectedEpisodeData.air_date;

    console.log(selectedDateData);

    const idEpisode = selectedEpisodeData.id;

    const selectedNumberEpisode = idEpisode.toString();

    console.log("Temporada seleccionada:", selectedSeason);
    console.log("Numero de episodio seleccionado:", selectedNumberEpisode);
    console.log("Episodio seleccionado:", selectedEpisode);
    console.log("Fecha de creación:", selectedDateData);

    setTitleEpisode(selectedEpisode);
    setSelectedSeason(selectedSeason);
    setSelectedEpisode(selectedNumberEpisode);
    setOnAirEpisode(selectedDateData);
    setSelectedEpisodeData(selectedEpisodeData);
  };

  return (
    <>
    <div className="contenedorEpisode">
      <div className="contenedorSeasonEpisode">
        <div className="primerTitulo">
          <h1>
            {selectedSeason ? `${selectedSeason}` : "S01"}
            {selectedEpisode ? `E${selectedEpisode}` : "E1"}
          </h1>
          <h3 className="titulo">{titleEpisode === null ? "Pilot" : titleEpisode}</h3>
        </div>
      </div>
      <div className="contenedorAiredEpisode">
        <div className="segundoTitulo">
          <h3>Aired on: </h3>
          <h5 className="subTitulo">{onAirEpisode ? `${onAirEpisode}` : "December 2, 2013"}</h5>
        </div>
      </div>
      <div className="contenedorPickEpisode">
        <h5>Pick Episode</h5>
      </div>
      <div className="contenedorSelect-mobile">
        <Select label="Choose..." className="max-w-xs myCustomSelect" style={selectStyles}>
          {episodes.map((season) => (
            <SelectSection key={season.season} style={selectSectionStyles} title={`Season ${season.season}`}>
              {season.episodes.map((episode) => (
                <SelectItem onClick={() => handleSelectChange(`${season.season}${episode.name}`)} key={episode.id}>
                  {episode.name}
                </SelectItem>
              ))}
            </SelectSection>
          ))}
        </Select>
      </div>
      <div className='contenedorDosSecciones'>
      <div className="select-desktop">
        <Select label="Choose..." className="max-w-xs myCustomSelect" style={selectStyles}>
          {episodes.map((season) => (
            <SelectSection key={season.season} style={selectSectionStyles} title={`Season ${season.season}`}>
              {season.episodes.map((episode) => (
                <SelectItem onClick={() => handleSelectChange(`${season.season}${episode.name}`)} key={episode.id}>
                  {episode.name}
                </SelectItem>
              ))}
            </SelectSection>
          ))}
        </Select>
      </div>
      <div className="contenedorCharacters">
        {characters.map((character) => (
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
      <Footer/>
    </div>
    </>
  );
}