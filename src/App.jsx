import React, { useState } from "react";
import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext";
import { fetchMovies, fetchTvShows } from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import defaultPoster from "./assets/copertina non disponibile.jpg";
import Grid from "./components/Grid";

function App() {
  const { movies, tvShows, loading, handleSearch } = useGlobalContext();


  return (
    <div className="app-container">
      <HeaderComponent onSearch={handleSearch} /> {/* Usando il componente Header */}
      {loading && <p>Caricamento in corso...</p>}
      <Grid title="Film" data={movies} />
      <Grid title="Serie Tv" data={tvShows} />
    </div>
  );
};

export default () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );

}
