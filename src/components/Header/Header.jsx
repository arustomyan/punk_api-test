import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navBar}>
        <Link to="/" className={styles.logo}>
          <h1>Beers.</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
