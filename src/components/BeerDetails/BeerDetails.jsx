import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../../api/PunkApi";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../Loader/Loader";
import styles from "./BeerDetails.module.css";

function BeerDetails() {
  const [beer, setBeer] = useState({});
  const params = useParams();

  const [fetchBeer, isLoading] = useFetching(async (id) => {
    await getBeer(id)
      .then((res) => setBeer(res[0]))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetchBeer(params.id);
  }, []);

  return (
    <div className={styles.component}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.cover}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={beer.image_url}
                alt={`Cover of ${beer.name}`}
              />
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.name}>{beer.name}</p>
            <p className={styles.tagline}>{beer.tagline}</p>
            <p className={styles.description}>{beer.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
