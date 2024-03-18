import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "../utils/films-api";

import Loader from "../../components/Loader/Loader";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

export default function MovieReviews() {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function movieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieReviews(filmId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    movieReviews();
  }, [filmId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Ooop, error! Reload page!</p>}
      {reviews.length > 0 && <MovieReviewsList reviews={reviews} />}
    </>
  );
}
