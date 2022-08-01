import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResultInfo.module.css";

function ResultInfo({ isFound, query }) {
  if (!query) return null;

  return (
    <div className={styles.resultsInfo}>
      {isFound ? (
        <h2 className={styles.info}>
          Nothing was found for &quot;{query}&quot;
        </h2>
      ) : (
        <h2 className={styles.info}>Search results for &quot;{query}&quot;</h2>
      )}
      <Link to="/" className={styles.deleteButton}>
        <svg viewBox="0 0 100 100" className={styles.delete}>
          <line x1="0" x2="100" y1="0" y2="100" />
          <line x1="0" x2="100" y1="100" y2="0" />
        </svg>
      </Link>
    </div>
  );
}

export default ResultInfo;
