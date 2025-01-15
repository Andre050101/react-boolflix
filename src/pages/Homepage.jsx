import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import HeaderComponent from "../components/HeaderComponent";
import Grid from "../components/Grid";

const Homepage = () => {
    const { movies, tvShows, loading, handleSearch } = useGlobalContext();

    return (
        <div className="app-container">
            <HeaderComponent onSearch={handleSearch} />
            {loading && <p>Caricamento in corso...</p>}
            <Grid title="Film" data={movies} />
            <Grid title="Serie Tv" data={tvShows} />
        </div>
    );
};

export default Homepage;