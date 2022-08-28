import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import { Loader } from "../shared/Loader";
import { ResultInfo } from "../shared/ResultInfo";
import { LoadMoreButton } from "../shared/LoadMoreButton";
import style from "./BeerCard/BeerCard.module.css";

function BeerList({ isLoading, beers, loadMore, isLoadingMore, query }) {
  return (
    <div className={styles.component}>
      <ResultInfo query={query} isFound={!beers.length} />
      <ul className={styles.container} title="beer list">
        {beers.map((item) => (
          <li className={style.component} title={item.name} key={item.id}>
            <BeerCard item={item} />
          </li>
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
