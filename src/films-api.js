import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const KEY = "09e01de3575a72d18fa0dc74baa8d086";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWUwMWRlMzU3NWE3MmQxOGZhMGRjNzRiYWE4ZDA4NiIsInN1YiI6IjY1ZWRmMGNiZWRlYjQzMDE0OWMxYWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rXwSUiOZLdWrf3eYvkS9MkDjDFJnGFjzGg4RSR98P-E",
//   },
// };

export const fetchFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.results;
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
