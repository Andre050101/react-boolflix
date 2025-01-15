export const normalizeLanguageCode = (code) => {
    const baseLanguage = code.split('-')[0];
    return baseLanguage;
};

export const getFlagUrl = (language) => {
    const flagCode = normalizeLanguageCode(language);

    if (flagCode === 'en') return 'https://flagcdn.com/24x18/gb.png';
    if (flagCode === 'ja') return 'https://flagcdn.com/24x18/jp.png';

    return `https://flagcdn.com/24x18/${flagCode}.png`;
}

export const getPosterUrl = (posterPath) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w342';
    if (posterPath) return `${baseUrl}${size}${posterPath}`;

    return defaultPoster;
}


export const renderStars = (vote) => {
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