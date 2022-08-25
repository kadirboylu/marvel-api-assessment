import React, { useState } from "react";
import logo from "@/assets/img/marvel-logo.png";
import styles from "./style.module.scss";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setQuery, reset } from "@/slices/characters/charactersSlice";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSearch = (q) => {
    setText(q);
    dispatch(setQuery(q));
    dispatch(reset());
  };

  return (
    <header>
      <img className={styles.logo} src={logo} alt="marvel-logo" />
      <div className={styles.search}>
        <GoSearch className={styles["search-icon"]} />
        <input
          className={styles["search-bar"]}
          type="text"
          placeholder="Search heroes"
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </div>
    </header>
  );
};

export default Header;
