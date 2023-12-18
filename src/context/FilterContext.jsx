import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialFilters = {
    status: {
      alive: false,
      dead: false,
      unknown: false,
    },
    species: {
      human: false,
      alien: false,
      poopybutthole: false,
      MythologicalCreature: false,
      animal: false,
      disease: false,
      robot: false,
      cronenberg: false,
      humanoid: false,
      unknown: false,
    },
    gender: {
      female: false,
      male: false,
      genderless: false,
      unknown: false,
    },
  };

  const [filters, setFilters] = useState(initialFilters);
  const [disablePagination, setDisablePagination] = useState(false)

  const clearFilters = () => {
    setFilters(initialFilters);
    setDisablePagination(false)
  };

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto añade un desplazamiento suave
    });
  };


  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        disablePagination, 
        setDisablePagination,
        clearFilters, 
        ScrollToTopButton 
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};