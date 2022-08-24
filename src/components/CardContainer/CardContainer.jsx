import React, { useEffect } from "react";
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
    <>
      {characters.map((character, index) => {
        return <Card key={index} character={character} />;
      })}
      <button onClick={() => dispatch(loadMore())}>Load More</button>
    </>
  );
};

export default CardContainer;
