import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    //Stato della query
    const [query, setQuery] = useState("");

    //Gestione input utente
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    //Gestione ricerca
    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Cerca un film/serie tv..."
                className="search-button"
            />
            <button
                type="submit"
                className="search-button">
                Cerca
            </button>
        </form>
    );
};

export default SearchBar;