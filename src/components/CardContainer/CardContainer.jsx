import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Card from "@/components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, loadMore } from "@/slices/characters/charactersSlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { characters, offset } = useSelector((store) => store.characters);

  useEffect(() => {
    dispatch(getCharacters(offset));
    console.log(offset);
  }, [offset]);

  return (
    <div className={styles.container}>
      {characters.map((character, index) => {
        return <Card key={index} character={character} />;
      })}
    </div>
  );
};

export default CardContainer;
