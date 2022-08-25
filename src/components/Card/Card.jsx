import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setCharacter } from "@/slices/details/detailsSlice";

const Card = ({ character }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCharacter(character));
  };

  return (
    <div className={`${styles.base} ${styles["slide-in"]}`}>
      {/* Character Img */}
      <img
        src={`${character.thumbnail.path}/standard_incredible.${character.thumbnail.extension}`}
        alt="character-img"
      />
      <div className={styles.heroCaption}>
        {/* Character Name */}
        <div className={styles.title}>
          <h2>{character.name}</h2>
        </div>
        <div className={styles["info-wrapper"]}>
          {/* Description */}
          <p className={styles.info}>
            {character.description === "" || character.description === null
              ? "No description given."
              : character.description}
          </p>
          {/* Click to see more */}
          <Link onClick={handleClick} to="/character">
            Click to see more
            <CgArrowLongRight className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
