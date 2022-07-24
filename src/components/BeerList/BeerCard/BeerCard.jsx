import React from "react";
import { Link } from "react-router-dom";
import style from "./BeerCard.module.css";
import { limitStr } from "../../../helpers";

function BeerCard({ item }) {
  return (
    <li className={style.component}>
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

        <p className={style.name}>{item.name}</p>
        <p className={style.description}>{limitStr(item.description)}</p>
      </Link>
    </li>
  );
}

export default BeerCard;
