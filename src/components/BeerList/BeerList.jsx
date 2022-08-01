import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import { Loader } from "../shared/Loader";
import { ResultInfo } from "../shared/ResultInfo";
import { LoadMoreButton } from "../shared/LoadMoreButton";

function BeerList({ isLoading, beers, loadMore, isLoadingMore, query }) {
  return (
    <div className={styles.component}>
      <ResultInfo query={query} isFound={!beers.length} />
      <ul className={styles.container} title="beer list">
        {beers.map((item) => (
          <BeerCard item={item} key={item.id} />
        ))}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        <LoadMoreButton visible={isLoadingMore} loadMore={loadMore} />
      )}
    </div>
  );
}

export default BeerList;
