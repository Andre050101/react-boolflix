import React, { useState } from "react";
import { getPosterUrl, getFlagUrl, truncateDescription, truncateCharacters } from "../utils/utils";
import defaultPoster from "../assets/copertina non disponibile.jpg";
import Stars from "./Stars";
import styles from "./Card.module.css";
import Modal from "./Modal";

const Card = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={styles.card} onClick={handleCardClick}>
                <img
                    src={getPosterUrl(data.poster_path, defaultPoster)}
                    alt={data.title || data.name}
                    className={styles.poster}
                />
                <div className={styles.info}>
                    <h3><strong>Titolo:</strong> {data.title || data.name}</h3>
                    <p><strong>Anno: </strong>{truncateCharacters(data.release_date || data.first_air_date || "", 4)}</p>
                    <p><strong>Descrizione:</strong> {truncateDescription(data.overview, 12) || "Descrizione non disponibile"}</p>
                    <div className={styles.language}>
                        <p><strong>Lingua originale:</strong></p>
                        <img
                            src={getFlagUrl(data.original_language)}
                            alt={data.original_language}
                            className={styles.flag}
                        />
                    </div>
                    <Stars vote={data.vote_average} />
                </div>
            </div>
            {showModal && <Modal data={data} onClose={handleCloseModal} />}
        </>

    );
};

export default Card;