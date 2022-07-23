import React from "react";
import style from "./BeerCard.module.css";
import { limitStr } from "../../../helpers";

function BeerCard({ item }) {
  const flag = false;

  return (
    <li className={style.component}>
      <div className={style.imageWrapper}>
        {flag ? (
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
    </li>
  );
}

export default BeerCard;
