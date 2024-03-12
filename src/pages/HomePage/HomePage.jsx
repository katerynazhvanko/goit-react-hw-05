import { useState, useEffect } from "react";
import { fetchFilms } from "../../films-api";
import FilmsTrending from "../../components/FilmsTrending/FilmsTrending";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await fetchFilms();
        setFilms(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Trending Films</h1>
      {isLoading && <p>Loading, please wait...</p>}
      {error && <p>Ooop, error! Reload page!</p>}
      <FilmsTrending films={films} />
    </div>
  );
}
