import axios from 'axios';

const api  = {
    method: 'GET',
    url: 'https://moviesverse1.p.rapidapi.com/movies/2',
    headers: {
      'X-RapidAPI-Key': '014d8d5a2emsh34008b7bc62d404p1b8465jsne5545252bb38',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
    }
};

export const options = async () => {
    try {
        const response = await axios.request(api);
        return response.data.movies;
    } catch (error) {
        console.error(error);
    }
}