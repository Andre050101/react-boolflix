import React from "react";
import Card from "./Card";

const Grid = ({ title, data }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="movie-grid">
                {data.length > 0 ? (
                    data.map((item) => <Card key={item.id} data={item} />)
                ) : (
                    <p>Nessun {title.toLowerCase()} trovato.</p>
                )}
            </div>
        </>
    );
};

export default Grid;