import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const apiKey = "cb1a8b1295760b4784d716a22b5dd1db";

const fetchTrendingMovies = () => {
  return axios(`/trending/movie/day?api_key=${apiKey}`).then(
    (response) => response.data.results
  );
};

const fetchMovieDetails = (id) => {
  return axios(`/movie/${id}?api_key=${apiKey}`).then(
    (response) => response.data
  );
};

const fetchMovieCast = (id) => {
  return axios(`/movie/${id}/credits?api_key=${apiKey}`).then(
    (response) => response.data.cast
  );
};

const fetchMovieReviews = (id) => {
  return axios(`/movie/${id}/reviews?api_key=${apiKey}`).then(
    (response) => response.data.results
  );
};

const fetchMoviesWithQuery = (searchQuery) => {
  return axios(`/search/movie?api_key=${apiKey}&query=${searchQuery}`).then(
    (response) => response.data.results
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMoviesWithQuery,
};
