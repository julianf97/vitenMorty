import { React } from 'react';
import { Link } from 'react-router-dom';
import "./_navbar.scss"

const Navbar = () => {
    
    return(
        <div className='contenedorNavbar'>
            <div className='contenedorInternoNavbar'>
                <div className='contenedorLogo unbutu'>
                    <div className='contenedorTextoLogo'>
                        <Link to={'/'} className='enlace'>
                            <h1 className='tituloLogo'> Rick & Morty </h1>
                        </Link>
                        <Link to={'/'} className='enlace'>
                            <span className='wiki'>WiKi</span>
                        </Link>
                    </div>
                </div>
                <div className='contenedorNav'>
                    <div className='contenedorLista'>
                        <ul className='listaDesordenada'>
                            <Link to={'/characters'} className='enlace'>
                                <li>Characters</li>
                            </Link>
                            <Link to={'/episode'} className='enlace'>
                                <li>Episode</li>
                            </Link>
                            <Link to={'/location'} className='enlace'>
                                <li>Location</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='contenedorDarkLight'>
                        
                </div>
            </div>
        </div>
    )
    
}

export default Navbar;