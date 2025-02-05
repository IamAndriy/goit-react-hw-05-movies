import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers={
    accept: 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI',
}
axios.defaults.params={
    language: 'en-US',
}

export async function getTrendingMovies (abortCtrl) {
    const { data } = await axios.get(`/trending/movie/day`, {signal: abortCtrl.signal,});
    return data.results;
};


