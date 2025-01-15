import defaultPoster from '../assets/copertina non disponibile.jpg';
export const normalizeLanguageCode = (code) => {
    const baseLanguage = code.split('-')[0];
    return baseLanguage;
};

export const getFlagUrl = (language) => {
    const flagCode = normalizeLanguageCode(language);

    if (flagCode === 'en') return 'https://flagcdn.com/24x18/gb.png';
    if (flagCode === 'ja') return 'https://flagcdn.com/24x18/jp.png';

    const availableFlags = [
        "en", "es", "fr", "de", "it", "pt", "ru", "zh", "ja", "ko", "ar", "hi", "bn", "pa", "pl", "ro", "tr", "vi", "sv", "no",
        "da", "fi", "nl", "el", "cs", "hu", "he", "th", "id", "ms", "sw", "ta", "ml", "mr", "te", "gu", "kn", "ml", "sr", "hr",
        "sk", "bg", "uk", "sr", "lt", "lv", "et", "sq", "mk", "ka"
    ];
    if (availableFlags.includes(flagCode)) {
        return `https://flagcdn.com/24x18/${flagCode}.png`;
    }
    return null;
}

export const getPosterUrl = (posterPath) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w342';
    if (posterPath) return `${baseUrl}${size}${posterPath}`;

    return defaultPoster;
}

export const getPosterUrlforModal = (posterPath) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w342';
    if (posterPath) return `${baseUrl}${size}${posterPath}`;

    return null;
}

export const truncateDescription = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
};

export const truncateCharacters = (text, limit) => {
    const fallback = "Non disponibile";
    if (!text || typeof text !== "string") {
        return fallback;
    }
    const char = text.split('');
    if (char.length > limit) {
        return char.slice(0, limit).join('');
    }
    return text;
}