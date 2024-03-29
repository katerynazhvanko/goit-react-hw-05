import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { getMovieDetails } from "../../components/utils/films-api";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
// import MovieCast from "../../components/MovieCast/MovieCast";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";

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
    <div style={{ padding: "20px" }}>
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      <MovieCard film={film} />
      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #acacac",
          borderBottom: "1px solid #acacac",
        }}
      >
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
