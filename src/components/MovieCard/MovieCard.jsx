import MovieGenres from "../MovieGenres/MovieGenres";
import css from "./MovieCard.module.css";
import { default_img } from "../utils/base";

export default function MovieCard({ film }) {
  return (
    <div className={css.container}>
      <button type="button" className={css.button}>
        Go back
      </button>
      <div className={css.thumb}>
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : default_img
          }
          alt={film.title}
          className={css.poster}
        />
        <div className={css.description}>
          <h1 className={css.title}>{film.title}</h1>
          <p className={css.score}>
            <b>User Score:</b> {film.vote_average}
          </p>
          <p className={css.text}>
            <b>Overview:</b>
            {film.overview}
          </p>
          <p className={css.text}>
            <b>Genres:</b>
          </p>
          <MovieGenres genres={film.genres} />
        </div>
      </div>
    </div>
  );
}
