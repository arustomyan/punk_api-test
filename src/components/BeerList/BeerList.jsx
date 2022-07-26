import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";

function BeerList({ isLoading, beers, loadMore }) {
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
        <>
          {/* eslint-disable-next-line react/button-has-type*/}
          <button className={styles.loadMore} onClick={loadMore}>
            Load more
          </button>
        </>
      )}
    </div>
  );
}

export default BeerList;
