import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";

function BeerList({ isLoading, beers, loadMore }) {
  return (
    <div className={styles.component}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.container} title="beer list">
          {beers.map((item) => (
            <BeerCard item={item} key={item.id} />
          ))}
        </ul>
      )}
      <button className={styles.loadMore} onClick={loadMore} type="button">
        Load more
      </button>
    </div>
  );
}

export default BeerList;
