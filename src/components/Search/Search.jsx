import React, { useState } from "react";
import styles from "./Search.module.css";
import replaceSpace from "../../helpers/replaceSpace";

function Search({ callback }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filterQuery = replaceSpace(query);
    if (filterQuery) {
      callback(filterQuery);
    }
    setQuery("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.search}
          value={query}
          style={{ display: "inline" }}
          type="text"
          name="Search for a beers…"
          placeholder="Search for a beers…"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit" className={styles.button}>
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
