import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";

import { getMovieDetails } from "../../components/utils/films-api";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  console.log(backLinkRef.current);

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
    <>
      <Link to={backLinkRef.current} className={css.backlink}>
        <IoArrowBackCircleOutline />
        Go back
      </Link>

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
