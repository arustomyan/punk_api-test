import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBeer } from "../../api/PunkApi";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../shared/Loader/Loader";
import styles from "./BeerDetails.module.css";

function BeerDetails() {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const params = useParams();

  const [fetchBeer] = useFetching(async (id) => {
    await getBeer(id)
      .then((res) => {
        setBeer(res[0]);
        document.title = res[0].name;
      })
      .catch((err) => console.log(err));
  }, setIsLoading);

  useEffect(() => {
    fetchBeer(params.id);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.page}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={styles.button}
      >
        Back
      </button>
      <div className={styles.component}>
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
          <div className={styles.specifications}>
            <p className={styles.abv}>ABV: {beer.abv}</p>
            <p className={styles.abv}>IBU: {beer.ibu}</p>
            <p className={styles.ebc}>EBC: {beer.ebc}</p>
          </div>

          <div className={styles.food_pairing}>
            <h3>Food Pairings:</h3>
            <ul>
              {beer.food_pairing &&
                beer.food_pairing.map((food) => <li key={food}>{food}</li>)}
            </ul>
          </div>
          <p className={styles.description}>{beer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
