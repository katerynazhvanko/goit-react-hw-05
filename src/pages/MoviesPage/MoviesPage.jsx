import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchFilms } from "../../components/utils/films-api";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { Toaster } from "react-hot-toast";

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query] = useSearchParams();

  const useQuery = query.get("query") ?? " ";

  useEffect(() => {
    if (!useQuery) return;

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        setFilms([]);
        const data = await searchFilms(useQuery);
        setFilms(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [useQuery]);

  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      {films.length > 0 && <MovieList films={films} />}
      <Toaster position="top-right" />
    </>
  );
}
