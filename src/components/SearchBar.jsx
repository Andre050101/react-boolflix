import React from "react";
import Styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, query, onInputChange }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSearch} className={Styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={onInputChange}
                placeholder="Cerca un film/serie tv..."
                className={Styles.searchInput}
            />
            <button
                type="submit"
                className={Styles.searchButton}>
                Cerca
            </button>
        </form>
    );
};

export default SearchBar;