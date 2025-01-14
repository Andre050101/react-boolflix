import React from "react";
import SearchBar from "./SearchBar";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = ({ onSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/Logo.png" alt="" />
        <h1 className={styles.logoh1}><strong>BoolFlix</strong></h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default HeaderComponent;