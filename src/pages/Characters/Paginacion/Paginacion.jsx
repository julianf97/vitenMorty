import { useContext } from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "../../../context/FilterContext"
import "./_paginacion.scss";

const Paginacion = ({ currentPage, onPageChange }) => {
  const { disablePagination, ScrollToTopButton } = useContext(FilterContext);

  const handlePrevClick = () => {
    if (!disablePagination && currentPage > 1) {
      onPageChange(currentPage - 1);
      ScrollToTopButton();
    }
  };

  const handleNextClick = () => {
    if (!disablePagination) {
      onPageChange(currentPage + 1);
      ScrollToTopButton();
    }
  };

  return (
    <div className="contenedorPaginacion">
      {!disablePagination && (
        <div className="contenedorCirculos">
          <div className="circuloPrev" onClick={handlePrevClick}>
            <span>
              <FontAwesomeIcon className="icon" icon={faChevronLeft} />
            </span>
          </div>
          <div className="circuloNum">
            <span>{currentPage}</span>
          </div>
          <div className="circuloNext" onClick={handleNextClick}>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Agrega la validación de PropTypes
Paginacion.propTypes = {
  currentPage: PropTypes.number.isRequired, // Cambia el tipo según sea necesario
  onPageChange: PropTypes.func.isRequired,
};

export default Paginacion;