import { createContext, useState, useEffect } from "react";

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
  const [disablePagination, setDisablePagination] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const clearFilters = () => {
    setFilters(initialFilters);
    setDisablePagination(false);
    setValueInput('');
  };

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
  }, [valueInput]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        disablePagination,
        setDisablePagination,
        valueInput,
        setValueInput,
        clearFilters,
        ScrollToTopButton,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};