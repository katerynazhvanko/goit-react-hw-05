import { default_img } from "../utils/base";
import css from "./MovieCastList.module.css";

export default function MovieCastList({ actors }) {
  return (
    <ul className={css.list}>
      {actors.map((actor) => (
        <li key={actor.id} className={css.item}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : default_img
            }
            alt={actor.original_name}
            className={css.photo}
          />
          <h3 className={css.name}>{actor.original_name}</h3>
          <h4 className={css.character}>Character: {actor.character}</h4>
        </li>
      ))}
    </ul>
  );
}
