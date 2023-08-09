import { React } from 'react';
import "./_presentacion.scss"

const Presentacion = () => {
    
    return(
        <div className='contenedorPresentacion'>
            <div className='ImagenPresentacion'>
                
            </div>
            <div className='contenedorBotonesPrincipales'>
                <div className='contenedorAllCaracters'>
                    <button className='btnAllCaracters'>
                        All Characters
                    </button>
                </div>
                <div className='contenedorSegundoBtn'>
                    <button className='btnSegundo'>
                        Get Schwifty
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default Presentacion