import React from "react";

const Stars = ({ vote }) => {
    const stars = Math.ceil(vote / 2);
    return (
        <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
                <i
                    key={index}
                    className={index < stars ? "fas fa-star" : "far fa-star"} // Stelle piene o vuote
                    style={{ color: "#FFD700", marginRight: "5px" }}
                ></i>
            ))}
        </div>
    );
};

export default Stars;