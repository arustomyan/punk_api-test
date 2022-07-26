import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";

function BeerList({ isLoading, beers, loadMore, isLoadingMore }) {
  return (
    <div className={styles.component}>
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
