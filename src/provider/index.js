import { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { response } from '../mocks';
import { movieMocks } from '../mocks/movies.mocks';
import { tvSeriesMocks } from '../mocks/tvSeries.mocks';

const MoviesAndSeriesContext = createContext(null);

const { Provider } = MoviesAndSeriesContext;

export const MoviesAndSeriesProvider = ({ children }) => {
  /**
   * On development mode, avoid calling api to save free trial fetching tries
   * Instead, use mocks
   */

  /*
   const data = useFetch();
   console.log('data desde MoviesAndSeriesProvider', data);
  */

  return (
    <Provider
      value={{
        movies: movieMocks,
        tvSeries: tvSeriesMocks,
        allData: response
      }}
    >
      {children}
    </Provider>
  );
};

export const useMoviesAndSeries = () => {
  const context = useContext(MoviesAndSeriesContext);
  if (!context) {
    throw new Error(
      'useMoviesAndSeries must be used within a MoviesAndSeriesProvider'
    );
  }
  return context;
};
