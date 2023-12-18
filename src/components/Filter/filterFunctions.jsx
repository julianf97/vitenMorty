import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const FilterFunctions = () => {
  const { setFilters } = useContext(FilterContext);

  const filterStatusAlive = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: {
        alive: true,
        dead: false,
        unknown: false,
      },
    }));
  };

  const filterStatusDead = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: {
        alive: false,
        dead: true,
        unknown: false,
      },
    }));
  };

  const filterStatusUnknown = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: {
        alive: false,
        dead: false,
        unknown: true,
      },
    }));
  };

  const filterSpeciesHuman = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: true,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        humanoid: false,
        disease: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesAlien = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: true,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        disease: false,
        humanoid: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesPoopybutthole = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: true,
        MythologicalCreature: false,
        animal: false,
        disease: false,
        humanoid: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesMythological = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: true,
        animal: false,
        humanoid: false,
        disease: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesAnimal = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        humanoid: false,
        MythologicalCreature: false,
        animal: true,
        disease: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesDisease = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        disease: true,
        humanoid: false,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesRobot = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        humanoid: false,
        disease: false,
        robot: true,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterSpeciesCronenberg = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        humanoid: false,
        disease: false,
        robot: false,
        cronenberg: true,
        unknown: false,
      },
    }));
  };

  const filterSpeciesUnknown = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        disease: false,
        humanoid: false,
        robot: false,
        cronenberg: false,
        unknown: true,
      },
    }));
  };

  const filterSpeciesHumanoid = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: {
        human: false,
        alien: false,
        poopybutthole: false,
        MythologicalCreature: false,
        animal: false,
        disease: false,
        humanoid: true,
        robot: false,
        cronenberg: false,
        unknown: false,
      },
    }));
  };

  const filterGenderFemale = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: {
        female: true,
        male: false,
        genderless: false,
        unknown: false,
      },
    }));
  };

  const filterGenderMale = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: {
        female: false,
        male: true,
        genderless: false,
        unknown: false,
      },
    }));
  };

  const filterGenderGenderless = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: {
        female: false,
        male: false,
        genderless: true,
        unknown: false,
      },
    }));
  };

  const filterGenderUnknown = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: {
        female: false,
        male: false,
        genderless: false,
        unknown: true,
      },
    }));
  };

  return {
    filterStatusAlive,
    filterStatusDead,
    filterStatusUnknown,
    filterSpeciesHuman,
    filterSpeciesAlien,
    filterSpeciesPoopybutthole,
    filterSpeciesAnimal,
    filterSpeciesMythological,
    filterSpeciesRobot,
    filterSpeciesDisease,
    filterSpeciesCronenberg,
    filterSpeciesHumanoid,
    filterSpeciesUnknown,
    filterGenderFemale,
    filterGenderMale,
    filterGenderGenderless,
    filterGenderUnknown
  };
};

export default FilterFunctions;
