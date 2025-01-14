import React, { useState } from "react";
import { fetchMovies } from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {

  //Film
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const normalizeLanguageCode = (code) => {
    const baseLanguage = code.split('-')[0];
    return baseLanguage;
  };

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = await fetchMovies(query);
      setMovies(data.results);
    }
    catch (error) {
      console.error("Errore durante la ricerca", error);
    }
    finally {
      setLoading(false);
    }
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
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
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
                  <p>{movie.original_language}</p>
                </div>
                <p>Voto: {movie.vote_average}</p>
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

export default App;
