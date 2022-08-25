import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "@/slices/characters/charactersSlice";
import { getComics } from "@/slices/details/detailsSlice";
import { CgArrowLongLeft } from "react-icons/cg";
import ComicContainer from "@/components/ComicContainer";
import Loading from "@/components/Loading";
import styles from "./style.module.scss";

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { character, isLoading } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(reset()); // reset character, offset and query
    dispatch(getComics(character.id));
  }, [character.id]);

  return (
    <div className={styles.base}>
      <div className={styles["go-back"]}>
        <Link to="/" className={styles.link}>
          <CgArrowLongLeft className={styles.icon} />
        </Link>
      </div>
      <img
        src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
        alt={character.name}
        className={styles["character-img"]}
      />
      <h2>{character.name}</h2>
      <p className={styles.description}>{character.description}</p>
      <h2>COMICS</h2>
      {isLoading ? <Loading /> : <ComicContainer />}
    </div>
  );
};

export default CharacterDetail;
