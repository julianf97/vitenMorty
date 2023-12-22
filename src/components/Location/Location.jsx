import "./_location.scss";
import { useState, useEffect, useMemo } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import CharacterCard from "../Cards/CaracterCard/CharacterCard";
import Footer from "../Footer/Footer";
import useRickAndMortyLocations from "../../hooks/useRickAndMortyLocations";

function Location() {
  const { locations, firstLocations } = useRickAndMortyLocations();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocationData, setSelectedLocationData] = useState(null);
  const [selectedDimension, setSelectedDimension] = useState(null);
  const [residents, setResidents] = useState([]);
  const [residentsFirstLocations, setResidentsFirstLocations] = useState([]);
  const [selectUsed, setSelectUsed] = useState(false);

  const selectStyles = {
    backgroundColor: "#222",
    color: "#bfde42",
    boxShadow: "none",
    padding: "0px",
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      if (selectedLocationData && selectedLocationData.characters) {
        try {
          const residentsData = await Promise.all(
            selectedLocationData.characters.map(async (characterUrl) => {
              const characterDetails = await fetchCharacterDetails(characterUrl);
              return characterDetails;
            })
          );

          const validResidents = residentsData.filter(character => character !== null);

          setResidents(validResidents);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      }
    };

    fetchCharacters();
  }, [selectedLocationData]);

  useEffect(() => {
    const fetchFirstLocations = async () => {
      if (firstLocations.residents) {
        try {
          const residentsFirstLocationsData = await Promise.all(
            firstLocations.residents.map(async (characterUrl) => {
              const characterDetails = await fetchCharacterDetails(characterUrl);
              return characterDetails;
            })
          );

          const validResidentsFirstLocations = residentsFirstLocationsData.filter(character => character !== null);

          setResidentsFirstLocations(validResidentsFirstLocations);
        } catch (error) {
          console.error('Error fetching first locations characters:', error);
        }
      }
    };

    fetchFirstLocations();
  }, [firstLocations]);

  useEffect(() => {
    setResidentsFirstLocations(firstLocations.residents || []);
  }, [firstLocations]);

  const residentsToDisplay = useMemo(() => {
    return selectUsed ? residents : residentsFirstLocations;
  }, [selectUsed, residents, residentsFirstLocations]);

  const fetchCharacterDetails = async (characterUrl) => {
    try {
      const response = await fetch(characterUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const character = await response.json();
      return character;
    } catch (error) {
      console.error('Error fetching character details:', error);
      return null;
    }
  };

  const handleSelectChange = async (selectedValue) => {
    const selectedLocation = selectedValue;
    const selectedLocationObject = locations.find(location => location.name === selectedLocation);

    const selectedDimension = selectedLocationObject.dimension;
    const selectedType = selectedLocationObject.type;

    setSelectedDimension(selectedDimension);
    setSelectedType(selectedType);
    setSelectedLocation(selectedLocation);

    const residentsData = await Promise.all(
      selectedLocationObject.residents.map(async (characterUrl) => {
        const characterDetails = await fetchCharacterDetails(characterUrl);
        return characterDetails;
      })
    );

    const validResidents = residentsData.filter(character => character !== null);
    
    setResidents(validResidents);
    setSelectedLocationData(selectedLocationObject);
    setSelectUsed(true);
  };

  return (
    <>
      <div className="contenedorEpisode">
        <div className="contenedorSeasonEpisode">
          <div className="primerTitulo">
            <h1>{selectedLocation ? `${selectedLocation}` : "Earth (C-137)"}</h1>
          </div>
        </div>
        <div className="contenedorAiredEpisode">
          <div className="segundoTitulo">
            <h3>Dimension: </h3>
            <h5 className="subTitulo">{selectedDimension ? `${selectedDimension}` : "Dimension C-137"}</h5>
          </div>
          <div className="tercerTitulo">
            <h3>Type: </h3>
            <h5 className="subTitulo">{selectedType ? `${selectedType}` : "Planet"}</h5>
          </div>
        </div>
        <div className="contenedorPickEpisode">
          <h5>Pick Location</h5>
        </div>
        <div className="contenedorSelect-mobile">
          <Select label="Choose..." className="max-w-xs myCustomSelect" style={selectStyles}>
              {locations && locations.map((location) => (
                <SelectItem key={location.id} onClick={() => handleSelectChange(location.name)}>
                  {location.name}
                </SelectItem>
              ))}
          </Select>
        </div>
        <div className="contenedorDosSecciones">
          <div className="select-desktop">
            <h5>Pick Location</h5>
            <Select label="Choose..." className="max-w-xs myCustomSelect" style={selectStyles}>
              {locations && locations.map((location) => (
                <SelectItem key={location.id} onClick={() => handleSelectChange(location.name)}>
                  {location.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="contenedorPersonajes">
            <div className="contenedorInternoPersonajes">
              {residentsToDisplay && residentsToDisplay.map((character) => (
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
        <Footer />
      </div>
    </>
  );
}

export default Location;