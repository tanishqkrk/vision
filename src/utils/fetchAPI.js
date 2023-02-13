import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '81ea193ad8msh7f722ef5fa9d248p1e61afjsnd7e97c253601',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};

// !TESTING KEY
// 834f9f0f0dmsh7855af479e4d60bp1d97f4jsne51872208059