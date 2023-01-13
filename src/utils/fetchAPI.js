import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '834f9f0f0dmsh7855af479e4d60bp1d97f4jsne51872208059',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};