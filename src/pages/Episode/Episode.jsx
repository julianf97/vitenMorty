import "./_episode.scss";
import { useState, useEffect } from "react";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import useRickAndMortyEpisodes from "../../hooks/useRickAndMortyEpisodes";
import CharacterCard from "../../components/Cards/CaracterCard/CharacterCard";
import Footer from "../../components/Footer/Footer";
import { CircularProgress } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Episode() {
  const { episodes, loading, error } = useRickAndMortyEpisodes();
  const [titleEpisode, setTitleEpisode] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [onAirEpisode, setOnAirEpisode] = useState(null);
  const [selectedEpisodeData, setSelectedEpisodeData] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [charactersPilot, setCharactersPilot] = useState([]);
  const [selectUsed, setSelectUsed] = useState(false);

  useEffect(() => {
    if (!selectUsed && episodes.length > 0) {
      const firstEpisodeData = episodes[0].episodes[0];
      handleSelectChange(`${episodes[0].season}${firstEpisodeData.name}`);
    }
  }, [selectUsed, episodes]);

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

    const selectedDateData = selectedEpisodeData.air_date;

    const selectFirstSeason = episodes[0];
    const selectFirstEpisode = selectFirstSeason.episodes[0];
    const selectPilotCharacters = selectFirstEpisode.characters;

    const idEpisode = selectedEpisodeData.id;
    const selectedNumberEpisode = idEpisode.toString();

    setTitleEpisode(selectedEpisode);
    setSelectedSeason(selectedSeason);
    setSelectedEpisode(selectedNumberEpisode);
    setOnAirEpisode(selectedDateData);
    setSelectedEpisodeData(selectedEpisodeData);
    setCharactersPilot(selectPilotCharacters);
    setSelectUsed(true);
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
                  <SelectItem
                    onClick={() => handleSelectChange(`${season.season}${episode.name}`)}
                    key={episode.id}
                  >
                    {episode.name}
                  </SelectItem>
                ))}
              </SelectSection>
            ))}
          </Select>
        </div>
        <div className="contenedorDosSecciones">
          <div className="select-desktop">
            <h5>Pick Episode</h5>
            <Select label="Choose..." className="max-w-xs myCustomSelect" style={selectStyles}>
              {episodes.map((season) => (
                <SelectSection key={season.season} style={selectSectionStyles} title={`Season ${season.season}`}>
                  {season.episodes.map((episode) => (
                    <SelectItem
                      onClick={() => handleSelectChange(`${season.season}${episode.name}`)}
                      key={episode.id}
                    >
                      {episode.name}
                    </SelectItem>
                  ))}
                </SelectSection>
              ))}
            </Select>
          </div>
          <div className="contenedorPersonajes">
            <div className="contenedorInternoPersonajes">
              {loading && (
                <CircularProgress
                  style={{
                    marginLeft: "350px",
                    marginTop: "150px",
                    ...(window.innerWidth <= 600 && {
                      marginLeft: "170px",
                      marginTop: "50px",
                    }),
                  }}
                  size="lg"
                  color="success"
                  aria-label="Loading..."
                />
              )}

              {error && <p>Error: {error.message}</p>}
              {selectUsed
                ? characters.map((character) => (
                    <Link to={`/characters/${character.id}`} key={character.id}>
                      <CharacterCard
                        gender={character.gender}
                        name={character.name}
                        status={character.status}
                        location={character.location}
                        episode={character.episode}
                        image={character.image}
                      />
                    </Link>
                  ))
                : charactersPilot.map((character) => (
                    <Link to={`/characters/${character.id}`} key={character.id}>
                      <CharacterCard
                        gender={character.gender}
                        name={character.name}
                        status={character.status}
                        location={character.location}
                        episode={character.episode}
                        image={character.image}
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
