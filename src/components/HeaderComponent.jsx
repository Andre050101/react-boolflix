import React from "react";
import SearchBar from "./SearchBar";

const HeaderComponent = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>BoolFlix</h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default HeaderComponent;