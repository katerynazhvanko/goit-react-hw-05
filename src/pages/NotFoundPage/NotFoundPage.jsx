import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        <b>Ooops! Not found page</b>
      </p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}
