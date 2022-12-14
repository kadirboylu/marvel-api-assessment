import React from "react";
import styles from "./style.module.scss";

const Loading = () => {
  return (
    <div className={styles.base}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
