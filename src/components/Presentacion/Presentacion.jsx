import "./_presentacion.scss"
import imagenPresentacion from "../../img/homePresentation.png"

const Presentacion = () => {
    
    return(
        <div className='contenedorPresentacion'>
            <div className='ImagenPresentacion'>
                <img src={imagenPresentacion} alt="imgPresentacion" />
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