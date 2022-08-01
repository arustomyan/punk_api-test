import React from "react";
import styles from "./LoadMoreButton.module.css";

function LoadMoreButton({ visible, loadMore }) {
  return (
    <div>
      {!visible && (
        <button className={styles.loadMore} onClick={loadMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
}

export default LoadMoreButton;
