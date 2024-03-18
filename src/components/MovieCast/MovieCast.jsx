import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "../utils/films-api";

import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const { filmId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieActors() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieCast(filmId);
        setActors(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieActors();
  }, [filmId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      {actors.length > 0 && <MovieCastList actors={actors} />}
    </>
  );
}
