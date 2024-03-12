export default function FilmsTrending({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <img src={film.poster_path} alt={film.title} />
          <p>{film.title}</p>
        </li>
      ))}
    </ul>
  );
}
