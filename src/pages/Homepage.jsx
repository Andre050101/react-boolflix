import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import HeaderComponent from "../components/HeaderComponent";
import Grid from "../components/Grid";
import styles from "./Homepage.module.css";

const Homepage = () => {
    const { movies, tvShows, loading, message, searchQuery } = useGlobalContext();


    return (
        <div className={styles.container}>
            <HeaderComponent />
            {loading && <p>Caricamento in corso...</p>}
            {searchQuery === "" ? (
                <div className={styles.centerMessage}>
                    <h2>{message}</h2>
                </div>
            ) : (

                <>
                    <Grid title="Film" data={movies} />
                    <Grid title="Serie Tv" data={tvShows} />
                </>
            )}
        </div>
    );
};

export default Homepage;