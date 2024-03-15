import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../components/utils/films-api";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import MovieCast from "../../components/MovieCast/MovieCast";

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getMovieById() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieDetails(filmId);
        setFilm(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieById();
  }, [filmId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      <MovieCard film={film} />
      <MovieCast />
    </div>
  );
}
