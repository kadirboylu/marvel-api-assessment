import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, loadMore } from "@/slices/characters/charactersSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@/components/Card";
import Loading from "../Loading/Loading";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { characters, offset, query, total } = useSelector(
    (store) => store.characters
  );

  useEffect(() => {
    dispatch(getCharacters({ offset, query }));
  }, [offset, query]);

  return (
    <InfiniteScroll
      dataLength={characters.length}
      hasMore={offset < total ? true : false}
      next={() => (offset < total ? dispatch(loadMore(offset)) : "")}
      loader={<Loading />}
    >
      <div className={styles.container}>
        {characters.map((character, index) => {
          return <Card key={index} character={character} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default CardContainer;
