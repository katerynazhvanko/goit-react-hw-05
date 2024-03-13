import { useState } from "react";
import { searchFilms } from "../../components/utils/films-api";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { Toaster } from "react-hot-toast";

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (newFilm) => {
    try {
      setIsLoading(true);
      setError(false);
      setFilms([]);
      const data = await searchFilms(newFilm);
      setFilms(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      {films.length > 0 && <MovieList films={films} />}
      <Toaster position="top-right" />
    </>
  );
}
