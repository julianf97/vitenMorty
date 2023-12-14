import "./_navbar.scss";
import logo from "../../assets/logoNavMobile.png";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <nav className="mobileNav">
      <div className="contenedorLogo">
        <img src={logo} alt="Mobile Logo"></img>
      </div>
      <div className="navPagesMobile">
        <ul>
          <Link to={'/characters'} className='enlace1'>
            <li className="link">Characters</li>
          </Link>
          <Link to={'/episode'} className='enlace'>
            <li className="link">Episode</li>
          </Link>
          <Link to={'/location'} className='enlace'>
            <li className="link">Location</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}