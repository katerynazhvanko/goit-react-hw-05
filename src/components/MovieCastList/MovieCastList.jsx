import { default_img } from "../utils/base";

export default function MovieCastList({ actors }) {
  return (
    <ul>
      {actors.map((actor) => (
        <li key={actor.gender}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : default_img
            }
            alt={actor.original_name}
          />
          <h2>{actor.original_name}</h2>
          <h3>Character: {actor.character}</h3>
        </li>
      ))}
    </ul>
  );
}
