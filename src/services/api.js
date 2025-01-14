import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; //Url api
const API_KEY = import.meta.env.VITE_API_KEY; //mia API_KEY in .env

export const fetchMovies = async (query, language = "it-IT") => {
    try {
        const response = await axios
            .get(`${BASE_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query,
                    language,
                },
            });
        return response.data;
    }
    catch (error) {
        console.error("Errore durante la chiamata API:", error);
        throw error;
    }

}