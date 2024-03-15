import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "../utils/films-api";

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
        const data = getMovieReviews(filmId);
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
      <p>{reviews}</p>
    </>
  );
}
