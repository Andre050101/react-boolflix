import React, { useState } from "react";
import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext";
import { fetchMovies, fetchTvShows } from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import defaultPoster from "./assets/copertina non disponibile.jpg";

function App() {

  const { movies, tvShows, loading, handleSearch } = useGlobalContext();

  const normalizeLanguageCode = (code) => {
    const baseLanguage = code.split('-')[0];
    return baseLanguage;
  };

  const getFlagUrl = (language) => {
    const flagCode = normalizeLanguageCode(language);

    if (flagCode === 'en') {
      return 'https://flagcdn.com/24x18/gb.png';
    }
    if (flagCode === 'ja') {
      return 'https://flagcdn.com/24x18/jp.png';
    }
    return `https://flagcdn.com/24x18/${flagCode}.png`;
  }

  const getPosterUrl = (posterPath) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w342';
    if (posterPath) {
      return `${baseUrl}${size}${posterPath}`;
    }
    return defaultPoster;
  }


  const renderStars = (vote) => {
    const stars = Math.ceil(vote / 2);
    return (
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <i
            key={index}
            className={index < stars ? "fas fa-star" : "far fa-star"} // Stelle piene o vuote
            style={{ color: "#FFD700", marginRight: "5px" }}
          ></i>
        ))}
      </div>
    );
  };
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
