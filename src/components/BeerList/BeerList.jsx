import items from "../../fakeData.json";
import styles from "./BeerList.module.css";
import { BeerCard } from "./BeerCard";

function BeerList() {
  return (
    <div className={styles.component}>
      <ul className={styles.container}>
        {items.map((item) => (
          <BeerCard item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default BeerList;
