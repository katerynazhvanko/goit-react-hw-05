import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ films }) {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

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
                      : defaultImg
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
