import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Presentacion from "../components/Presentacion"
import Characters from "../components/Characters/Characters"
import Episode from "../components/Episode/Episode"



const AppRouter = () => {

    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='*' element={<Navigate to={"/inicio/"}/>}/>
                    <Route path='/' element={<Presentacion/>}/> 
                    <Route path='/characters' element={<Characters/>}/>   
                    <Route path='/Episode' element={<Episode/>}/>   
                    <Route path='/Location' element={<Presentacion/>}/>   
                </Routes>
        </BrowserRouter>
    )

}

export default AppRouter