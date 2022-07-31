import { Link } from "react-router-dom";
import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";

function BeerList({ isLoading, beers, loadMore, isLoadingMore, query }) {
  return (
    <div className={styles.component}>
      {query && (
        <div className={styles.resultsInfo}>
          {!beers.length ? (
            <h2 className={styles.query}>
              Nothing was found for &quot;{query}&quot;
            </h2>
          ) : (
            <h2 className={styles.query}>
              Search results for &quot;{query}&quot;
            </h2>
          )}
          <Link to="/" className={styles.deleteButton}>
            <svg
              viewBox="0 0 100 100"
              className={styles.delete}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" x2="100" y1="0" y2="100" />
              <line x1="0" x2="100" y1="100" y2="0" />
            </svg>
          </Link>
        </div>
      )}
      <ul className={styles.container} title="beer list">
        {beers.map((item) => (
          <BeerCard item={item} key={item.id} />
        ))}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {isLoadingMore && (
            <button
              className={styles.loadMore}
              onClick={loadMore}
              type="button"
            >
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BeerList;
