import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Presentacion from "../components/Presentacion"
import Footer from "../components/Footer"
import Characters from "../components/Characters/Characters"



const AppRouter = () => {

    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='*' element={<Navigate to={"/inicio/"}/>}/>
                    <Route path='/' element={<Presentacion/>}/> 
                    <Route path='/characters' element={<Characters/>}/>   
                    <Route path='/Episode' element={<Presentacion/>}/>   
                    <Route path='/Location' element={<Presentacion/>}/>   
                </Routes>
            <Footer/>
        </BrowserRouter>
    )

}

export default AppRouter