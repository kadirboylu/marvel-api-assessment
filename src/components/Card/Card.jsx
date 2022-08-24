import React from "react";
import styles from "./style.module.scss";
import { CgArrowLongRight } from "react-icons/cg";

const Card = ({ character }) => {
  return (
    <div className={`${styles.base} ${styles["slide-in"]}`}>
      <img
        src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
        alt="character-img"
      />
      <div className={styles.heroCaption}>
        <div className={styles.title}>
          <h2>{character.name}</h2>
        </div>
        <div className={styles["info-wrapper"]}>
          <p className={styles.info}>
            {character.description === ""
              ? "No description given."
              : character.description}
          </p>
          <a href="#">
            Click to see more
            <CgArrowLongRight className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
