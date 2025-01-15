import React from "react";
import { getPosterUrl, getFlagUrl } from "../utils/utils";
import defaultPoster from "../assets/copertina non disponibile.jpg";
import Stars from "./Stars";

const Card = ({ data }) => {
    return (
        <div className="movie-card">
            <img
                src={getPosterUrl(data.poster_path, defaultPoster)}
                alt={data.title || data.name}
                className="movie-poster"
            />
            <div className="movie-info">
                <h3>{data.title || data.name}</h3>
                <div className="movie-language">
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