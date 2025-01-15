import React, { createContext, useState, useContext } from "react";
import { fetchMovies, fetchTvShows } from "../services/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("Digita per cercare qualcosa...");

  let debounceTimeout;

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setMessage("Digita per cercare qualcosa...");
    } else {
      setMessage("");
    }

    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      handleSearch(query);
    }, 500);
  };
  const handleSearch = async (query) => {
    if (query.trim() === "") return;

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
    <GlobalContext.Provider value={{ movies, tvShows, loading, searchQuery, message, handleInputChange, handleSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);