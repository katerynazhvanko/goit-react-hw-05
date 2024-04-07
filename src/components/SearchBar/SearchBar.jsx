import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [params, setParams] = useSearchParams();
  const userQuery = params.get("query") ?? "";

  const onChange = (e) => {
    const query = e.target.value;
    if (query.trim() === "") {
      setIsActiveBtn(false);
    }
    setIsActiveBtn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query.trim() === "") {
      return toast.error("Add valid query!");
    }
    params.set("query", query.trim());
    setParams(params);
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
        defaultValue={userQuery}
        onChange={onChange}
        placeholder="Search"
      />
      {isActiveBtn && (
        <button type="submit" className={css.button}>
          Search
        </button>
      )}
    </form>
  );
}
