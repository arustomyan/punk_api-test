import React from "react";
import styles from "./BeerDetails.module.css";

function BeerDetails({ item }) {
  const flag = false;
  return (
    <div className={styles.component}>
      {flag ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.cover}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={item.image_url}
                alt={`Cover of ${item.name}`}
              />
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.tagline}>{item.tagline}</p>
            <span className={styles.food_pairing}>
              <h3>Food Pairings:</h3>
              <ul>
                {item.food_pairing.map((food) => (
                  <li key={food}>{food}</li>
                ))}
              </ul>
            </span>
            <p className={styles.description}>{item.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
