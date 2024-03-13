import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

import css from "./HomePage.module.css";
import { fetchFilms } from "../../components/utils/films-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);
        setError(false);
        setFilms([]);
        const data = await fetchFilms();
        setFilms(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Films</h1>
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      <MovieList films={films} />
    </div>
  );
}
