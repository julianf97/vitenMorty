import "./_presentacion.scss"
import { Link } from "react-router-dom"
import imagenPresentacion from "../../img/homePresentation.png"

const Presentacion = () => {
    
    return(
        <div className='contenedorPresentacion'>
            <div className='ImagenPresentacion'>
                <img src={imagenPresentacion} alt="imgPresentacion" />
            </div>
            <div className='contenedorBotonesPrincipales'>
                <div className='contenedorAllCaracters'>
                    <Link to='/characters' className='btnAllCaracters'>
                        <button >
                            ALL CHARACTERS
                        </button>
                    </Link>
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