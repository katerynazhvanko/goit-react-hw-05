import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
import { default_img } from "../utils/base";

export default function MovieList({ films }) {
  return (
    <div className={css.box}>
      {films.length > 0 && (
        <ul className={css.list}>
          {films.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                <img
                  src={
                    film.poster_path
                      ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                      : default_img
                  }
                  alt={film.title}
                  className={css.poster}
                />
                <div className={css.textContainer}>
                  <p className={css.title}>{film.title}</p>
                  <p className={css.vote}>Vote average: {film.vote_average}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
