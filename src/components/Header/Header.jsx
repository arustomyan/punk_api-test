import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <a href="/5115" className={styles.logo}>
          Beers
        </a>
      </div>
    </div>
  );
}

export default Header;
