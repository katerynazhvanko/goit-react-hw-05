import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function NotFoundPage() {
  return (
    <>
      <Link to="/" className={css.backlink}>
        <IoArrowBackCircleOutline className={css.icon} />
        Back to Home page
      </Link>
      <div className={css.container}>
        <h1 className={css.text}>Ooops! Not found page</h1>
        <span className={css.label}>404</span>
      </div>
    </>
  );
}
