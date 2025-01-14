import React, { createContext, useState, useContext } from "react";
import { fetchMovies, fetchTvShows } from "../services/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const movieData = await fetchMovies(query);
      setMovies(movieData.results);

      const tvData = await fetchTvShows(query);
      setTvShows(tvData.results);
    }
    catch {
      console.error("Errore durante la ricerca", error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider value={{ movies, tvShows, loading, handleSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);