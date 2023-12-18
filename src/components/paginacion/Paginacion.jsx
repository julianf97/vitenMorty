import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "../../context/FilterContext";
import { useContext } from "react";
import "./_paginacion.scss";

const Paginacion = ({ currentPage, onPageChange }) => {
  
  const { disablePagination, ScrollToTopButton  } = useContext(FilterContext);

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
      {!disablePagination ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Paginacion;