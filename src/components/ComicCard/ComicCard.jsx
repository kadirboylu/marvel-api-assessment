import React from "react";
import styles from "./style.module.scss";
import { CgArrowLongRight } from "react-icons/cg";

const ComicCard = ({ comic }) => {
  return (
    <div className={`${styles.base} ${styles["slide-in"]}`}>
      <img
        src={`${comic.thumbnail.path}/landscape_incredible.${comic.thumbnail.extension}`}
        alt=""
      />
      <div className={styles["comic-caption"]}>
        <div className={styles.title}>
          <h4>{comic.title}</h4>
        </div>
        <p className={styles["description"]}>
          {
            // if description is empty, display "No description"
            comic.description === "" || comic.description === null
              ? "No description given"
              : comic.description
          }
        </p>
        <a
          className={styles["see-more"]}
          href={comic.urls[0].url}
          target={"_blank"}
          rel="noreferrer"
        >
          Click to see more
          <CgArrowLongRight className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default ComicCard;
