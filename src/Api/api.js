import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers={
    accept: 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI',
}


async function getTrendingMovies (abortCtrl) {
    axios.defaults.params={ language: 'en-US', }
    const { data } = await axios.get(`/trending/movie/day`, {signal: abortCtrl.signal,});
    return data.results;
};

async function getMoviesByQuery(filter, abortCtrl ) {
    
    axios.defaults.params = { query : filter, 
                              include_adult : false,
                              page : "1"
                            };
    const { data } = await axios.get(`/search/movie`, {signal: abortCtrl.signal,});
    return data.results;
}

async function getMovieDetails(movie_id, abortCtrl ) {
    axios.defaults.params={ language: 'en-US', };
    const {data} = await axios.get(`movie/${movie_id}`, {signal: abortCtrl.signal,});
    return data;
}

async function getMovieCast(movie_id, abortCtrl ) {
    axios.defaults.params={ language: 'en-US', }
    const { data } = await axios.get(`movie/${movie_id}/credits`, {signal: abortCtrl.signal,});
    return data.cast;
}

async function getMovieReviews(movie_id, abortCtrl ) {
    axios.defaults.params={ language: 'en-US', }
    const { data } = await axios.get(`movie/${movie_id}/reviews`, {signal: abortCtrl.signal,});
    return data.results;
}

export {
    getTrendingMovies,
    getMoviesByQuery,
    getMovieDetails,
    getMovieCast,
    getMovieReviews,
}
