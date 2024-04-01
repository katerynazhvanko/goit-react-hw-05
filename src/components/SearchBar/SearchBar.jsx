import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch, changeFilmParams, filmFilter }) {
  const [filter, setFilter] = useSearchParams();
  const userQuery = filter.get("query") ?? "";

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target.elements.search.value;
  //   if (form === "") {
  //     return toast.error("Add valid query!");
  //   }
  //   onSearch(form);
  //   console.log(form);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query.trim() === "") {
      return toast.error("Add valid query!");
    }
    filter.set("query", query.trim());
    setFilter(filter);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        className={css.input}
        value={filmFilter}
        onChange={(e) => changeFilmParams(e.target.value)}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
