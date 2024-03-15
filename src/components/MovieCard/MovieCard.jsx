import MovieGenres from "../MovieGenres/MovieGenres";
import css from "./MovieCard.module.css";
import { default_img } from "../utils/base";

export default function MovieCard({ film }) {
  return (
    <div className={css.container}>
      <button type="button" className={css.button}>
        Go back
      </button>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : default_img
        }
        alt={film.title}
      />
      <div className={css.description}>
        <h2 className={css.title}>{film.title}</h2>
        <p className={css.score}>User Score: </p>
        <p className={css.text}>Overview:{film.overview}</p>
        <p className={css.text}>Genres:</p>
        <MovieGenres genres={film.genres} />
      </div>
    </div>
  );
}
