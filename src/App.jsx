import AppRouter from './AppRouter/AppRouter';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';


function App() {

  return (
    <NextUIProvider>
      <AppRouter/>
    </NextUIProvider>
  );
}

export default App;
