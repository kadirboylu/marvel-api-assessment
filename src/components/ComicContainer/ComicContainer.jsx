import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import ComicCard from "@/components/ComicCard";

const ComicContainer = () => {
  const { comics } = useSelector((store) => store.details);

  return (
    <div className={styles.base}>
      {comics.map((comic) => {
        return <ComicCard key={comic.id} comic={comic} />;
      })}
    </div>
  );
};

export default ComicContainer;
