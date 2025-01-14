import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchMovies } from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GlobalProvider } from "./contexts/GlobalContext";
import HeaderComponent from "./components/HeaderComponent";


function App() {

  //Film
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <p>Lingua: {movie.original_language}</p>
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
