import React from "react";
import { Link } from "react-router-dom";
import { limitStr } from "../../../helpers";
import style from "./BeerCard.module.css";

function BeerCard({ item }) {
  return (
    <Link to={`/beer/${item.id}`} className={style.link}>
      <div className={style.imageWrapper}>
        {!item.image_url ? (
          <p>cover missing</p>
        ) : (
          <img
            className={style.image}
            src={item.image_url}
            alt={`Cover of ${item.name}`}
          />
        )}
      </div>
      <h2 className={style.name}>{item.name}</h2>
      <p className={style.description}>{limitStr(item.description)}</p>
    </Link>
  );
}

export default BeerCard;
