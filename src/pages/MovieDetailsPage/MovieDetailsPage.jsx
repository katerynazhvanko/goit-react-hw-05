import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../components/utils/films-api";
import MovieCard from "../../components/MovieCard/MovieCard";

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
      <MovieCard film={film} />
    </div>
  );
}
