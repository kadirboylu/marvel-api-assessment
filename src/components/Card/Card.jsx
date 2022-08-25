import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const Card = ({ character }) => {
  return (
    <div className={`${styles.base} ${styles["slide-in"]}`}>
      {/* Character Img */}
      <img
        src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
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
            {character.description === ""
              ? "No description given."
              : character.description}
          </p>
          {/* Click to see more */}
          <Link to="/character">
            Click to see more
            <CgArrowLongRight className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
