import css from "./MovieCard.module.css";

export default function MovieCard({film}) {
  return (
    <div className={css.container}>
      <button type="button" className={css.button}>Go back</button>
          <img src={ } alt={ } />
      <div className={css.description}>
        <h2 className={css.title}></h2>
        <p className={css.score}>User Score: </p>
        <p className={css.text}>Overview: </p>
        <p className={css.text}>Genres:</p>
      </div>
      <div className={css.add}>
              <h3 className={css.subtitle}>Additional information</h3>
              <ul>
                <li>Cast</li>
                <li>Reviews</li>
              </ul>
      </div>
    </div>
  );
}
