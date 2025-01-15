import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import SearchBar from "./SearchBar";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
  const { handleSearch, handleInputChange, searchQuery } = useGlobalContext();
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/Logo.png" alt="" />
        <h1 className={styles.logoh1}><strong>BoolFlix</strong></h1>
      </div>
      <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} query={searchQuery} />
    </header>
  );
};

export default HeaderComponent;