import AppRouter from './AppRouter/AppRouter';
import {NextUIProvider} from "@nextui-org/react";
import { FilterProvider } from './context/FilterContext';
import './App.css';


function App() {

  return (
    <NextUIProvider>
      <FilterProvider>
        <AppRouter/>
      </FilterProvider>
    </NextUIProvider>
  );
}

export default App;
