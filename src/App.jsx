import React, { useState } from "react";
import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext";
import { fetchMovies, fetchTvShows } from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import defaultPoster from "./assets/copertina non disponibile.jpg";

function App() {

  const { movies, tvShows, loading, handleSearch } = useGlobalContext();


  return (
    <div className="app-container">
      <HeaderComponent onSearch={handleSearch} /> {/* Usando il componente Header */}
      {loading && <p>Caricamento in corso...</p>}

      <h2>Film</h2>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-language">
                  <img
                    src={getFlagUrl(movie.original_language)}
                    alt={movie.original_language}
                    style={{ width: 20, height: 15 }}
                  />
                </div>
                <div>Voto: {renderStars(movie.vote_average)}</div>
              </div>
            </div>
          ))
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>
      <h2>Serie TV</h2>
      <div className="tv-show-grid">
        {tvShows.length > 0 ? (
          tvShows.map((show) => (
            <div key={show.id} className="movie-card">
              <img
                src={getPosterUrl(show.poster_path)}
                alt={show.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{show.title}</h3>
                <div className="movie-language">
                  <img
                    src={getFlagUrl(show.original_language)}
                    alt={show.original_language}
                    style={{ width: 20, height: 15 }}
                  />
                </div>
                <div>Voto: {renderStars(show.vote_average)}</div>
              </div>
            </div>
          ))
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>
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
