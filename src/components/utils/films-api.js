import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const KEY = "09e01de3575a72d18fa0dc74baa8d086";

export const fetchFilms = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
  return response.data.results;
};

export const searchFilms = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data.results;
};

export const getMovieDetails = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}?api_key=${KEY}`);
  return response.data;
};
