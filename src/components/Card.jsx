import React from "react";
import { getPosterUrl, getFlagUrl, truncateDescription } from "../utils/utils";
import defaultPoster from "../assets/copertina non disponibile.jpg";
import Stars from "./Stars";
import styles from "./Card.module.css";

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <img
                src={getPosterUrl(data.poster_path, defaultPoster)}
                alt={data.title || data.name}
                className={styles.poster}
            />
            <div className={styles.info}>
                <h3><strong>Titolo:</strong> {data.title || data.name}</h3>
                <p><strong>Descrizione:</strong> {truncateDescription(data.overview, 25)}</p>
                <div className={styles.language}>
                    <img
                        src={getFlagUrl(data.original_language)}
                        alt={data.original_language}
                        style={{ width: 20, height: 15 }}
                    />
                </div>
                <Stars vote={data.vote_average} />
            </div>
        </div>
    );
};

export default Card;