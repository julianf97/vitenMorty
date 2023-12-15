import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./_paginacion.scss";

const Paginacion = ({ currentPage, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="contenedorPaginacion">
      <div className="contenedorCirculos">
        <div className="circuloPrev" onClick={handlePrevClick}>
          <span> <FontAwesomeIcon icon={faChevronLeft} /> </span>
        </div>
        <div className="circuloNum">
          <span>{currentPage}</span>
        </div>
        <div className="circuloNext" onClick={handleNextClick}>
          <span> <FontAwesomeIcon icon={faChevronRight} /> </span>
        </div>
      </div>
    </div>
  );
};

export default Paginacion;