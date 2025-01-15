import React, { useState } from "react";
import { getPosterUrl, getFlagUrl, truncateDescription, truncateCharacters } from "../utils/utils";
import defaultPoster from "../assets/copertina non disponibile.jpg";
import Stars from "./Stars";
import styles from "./Card.module.css";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const flagUrl = getFlagUrl(data.original_language);

    const hasFlag = (flagCode) => {
        const availableFlags = [
            "en", "es", "fr", "de", "it", "pt", "ru", "zh", "ja", "ko", "ar", "hi", "bn", "pa", "pl", "ro", "tr", "vi", "sv", "no",
            "da", "fi", "nl", "el", "cs", "hu", "he", "th", "id", "ms", "sw", "ta", "ml", "mr", "te", "gu", "kn", "ml", "sr", "hr",
            "sk", "bg", "uk", "sr", "lt", "lv", "et", "sq", "mk", "ka"
        ];
        return availableFlags.includes(flagCode);
    };

    const flagIcon = flagUrl ? (
        <img src={flagUrl} alt={data.original_language} className={styles.flag} />
    ) : (
        <FontAwesomeIcon icon={faFlag} className={styles.flag} /> // Icona di FontAwesome come fallback
    );

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
                        {flagIcon}
                    </div>
                    <Stars vote={data.vote_average} />
                </div>
            </div>
            {showModal && <Modal data={data} onClose={handleCloseModal} />}
        </>
    );
};

export default Card;