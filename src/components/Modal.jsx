import React from "react";
import styles from "./Modal.module.css";
import { getPosterUrlforModal, truncateCharacters } from "../utils/utils";

const Modal = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    X
                </button>
                {getPosterUrlforModal(data.poster_path) ? (
                    <img
                        src={getPosterUrlforModal(data.poster_path)}
                        alt={data.title || data.name}
                        className={styles.poster}
                    />
                ) : (
                    <div className={styles.noPosterMessage}>
                        <p>Copertina non disponibile</p>
                    </div>
                )}
                <div className={styles.details}>
                    <h2>{data.title || data.name}</h2>
                    <p><strong>Anno:</strong> {truncateCharacters(data.release_date || data.first_air_date, 4)}</p>
                    <p><strong>Descrizione:</strong> {data.overview || "Descrizione non disponibile"}</p>
                    <p><strong>Voto:</strong> {Math.floor(data.vote_average)}</p>
                    <p><strong>Lingua originale:</strong> {data.original_language || "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;