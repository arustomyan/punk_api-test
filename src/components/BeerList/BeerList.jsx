import { useEffect, useState } from "react";
import { BeerCard } from "./BeerCard";
import styles from "./BeerList.module.css";
import Loader from "../Loader/Loader";
import { getBeers } from "../../api/PunkApi";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    (async () => {
      await getBeers().then((res) => setBeers(res));
    })();
  }, []);

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
