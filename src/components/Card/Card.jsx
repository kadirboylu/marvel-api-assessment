import React from "react";
import styles from "./style.module.scss";
import { CgArrowLongRight } from "react-icons/cg";

const Card = () => {
  return (
    <div className={`${styles.base} ${styles["slide-in"]}`}>
      <img src="https://picsum.photos/200/200" alt="hero-img" />
      <div className={styles.heroCaption}>
        <h2>HERO NAME</h2>
        <div className={styles["info-wrapper"]}>
          <p className={styles.info}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            sapiente libero vel ipsum, repellendus eaque sunt? Doloribus impedit
            distinctio voluptate dolorem dolor quod maiores inventore nesciunt
            quas facere. Odit, voluptates impedit quaerat consectetur delectus
            minus et, laboriosam voluptatum dolorem recusandae voluptas at.
            Dolor maiores, reiciendis assumenda atque nobis earum architecto.
          </p>
          <div className={styles.seeMore}>
            <a href="#">
              <CgArrowLongRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
