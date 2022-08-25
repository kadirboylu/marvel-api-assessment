import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import logo from "@/assets/img/marvel-logo.png";
import styles from "./style.module.scss";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setQuery, reset } from "@/slices/characters/charactersSlice";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (text === "") return;
    dispatch(setQuery(text));
    dispatch(reset());
  }, [text]);

  const updateQuery = (e) => setText(e.target.value);

  const debouncedOnChange = debounce(updateQuery, 500);

  return (
    <header>
      <img className={styles.logo} src={logo} alt="marvel-logo" />
      <div className={styles.search}>
        <GoSearch className={styles["search-icon"]} />
        <input
          className={styles["search-bar"]}
          type="text"
          placeholder="Search heroes"
          onChange={debouncedOnChange}
        />
      </div>
    </header>
  );
};

export default Header;
