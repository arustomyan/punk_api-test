import React from "react";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.container}>
      <input
        className={classes.search}
        type="text"
        placeholder="Search for a beers…"
        onChange={() => {}}
      />
    </div>
  );
}

export default Search;
