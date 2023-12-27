import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Presentacion from "./components/Presentacion";
import Characters from "./components/Characters/Characters";
import Episode from "./components/Episode/Episode";
import Location from "./components/Location/Location";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import { NextUIProvider } from "@nextui-org/react";
import { FilterProvider } from './context/FilterContext';
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <FilterProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Presentacion />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterPage />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/location" element={<Location />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </NextUIProvider>
  );
}

export default App;
