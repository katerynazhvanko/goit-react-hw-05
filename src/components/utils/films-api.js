import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWUwMWRlMzU3NWE3MmQxOGZhMGRjNzRiYWE4ZDA4NiIsInN1YiI6IjY1ZWRmMGNiZWRlYjQzMDE0OWMxYWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rXwSUiOZLdWrf3eYvkS9MkDjDFJnGFjzGg4RSR98P-E",
  },
  include_adult: false,
  language: "en-US",
});

export const fetchFilms = async () => {
  const response = await api.get(`/trending/movie/week`);
  return response.data.results;
};

export const searchFilms = async (query) => {
  const response = await api.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieDetails = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}`);
  return response.data;
};

export const getMovieCast = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/reviews`);
  return response.data.results;
};
