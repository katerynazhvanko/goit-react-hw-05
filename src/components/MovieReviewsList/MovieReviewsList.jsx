import css from "./MovieReviewsList.module.css";

export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <h3 className={css.name}>{review.author}</h3>
          <p className={css.review}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
