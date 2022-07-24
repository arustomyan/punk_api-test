import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link to="/" className={styles.logo}>
          Beers.
        </Link>
      </div>
    </div>
  );
}

export default Header;
