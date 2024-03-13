import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements.search.value;
    if (form === "") {
      return toast.error("Add valid query!");
    }
    onSearch(form);
    console.log(form);
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
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
