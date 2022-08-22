import React from "react";
import logo from "@/assets/img/marvel-logo.png";
import styles from "./style.module.scss";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <header>
      <img className={styles.logo} src={logo} alt="marvel-logo" />
      <div className={styles.search}>
        <GoSearch className={styles["search-icon"]} />
        <input
          className={styles["search-bar"]}
          type="text"
          placeholder="Search heroes"
        />
      </div>
    </header>
  );
};

export default Header;
