import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";

function BeerList({ beers }) {
  return (
    <div className={styles.component}>
      {!beers.length ? (
        <Loader />
      ) : (
        <ul className={styles.container} title="beer list">
          {beers.map((item) => (
            <BeerCard item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default BeerList;
