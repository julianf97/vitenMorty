import "./_presentacion.scss";
import { Link, useNavigate } from "react-router-dom";
import imagenPresentacion from "../../img/homePresentation.png";
import Footer from "../../components/Footer/Footer.jsx"
import { useRickAndMortyCharacters } from "../../hooks/useRickAndMortyCharacters";

const Presentacion = () => {
  const { getRandomCharacter } = useRickAndMortyCharacters();
  const navigate = useNavigate();

  const handleGetRandomCharacter = () => {
    const randomCharacter = getRandomCharacter();
    if (randomCharacter) {
      navigate(`/characters/${randomCharacter.id}`);
    }
  };

  return (
    <>
      <div className="contenedorPresentacion">
        <div className="ImagenPresentacion">
          <img src={imagenPresentacion} alt="imgPresentacion" />
        </div>
        <div className="contenedorBotonesPrincipales">
          <div className="contenedorAllCaracters">
            <Link to="/characters" className="btnAllCaracters">
              <button>ALL CHARACTERS</button>
            </Link>
          </div>
          <div className="contenedorSegundoBtn">
            <button onClick={handleGetRandomCharacter} className="btnSegundo">
              Get Schwifty
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Presentacion;
