import React, { useEffect } from "react";
import Card from "@/components/Card";
import { getCharacters } from "@/slices/characters/charactersSlice";
import { useSelector, useDispatch } from "react-redux";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((store) => store.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      {characters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </>
  );
};

export default CardContainer;
