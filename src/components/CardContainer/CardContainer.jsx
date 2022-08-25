import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, loadMore } from "@/slices/characters/charactersSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@/components/Card";
import Loading from "../Loading/Loading";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { characters, offset, query, total, isLoading } = useSelector(
    (store) => store.characters
  );

  useEffect(() => {
    dispatch(getCharacters({ offset, query }));
  }, [offset, query]);

  return (
    <InfiniteScroll
      dataLength={characters.length}
      hasMore={total > 30 ? true : false} // only load more if there are more than 30 characters
      next={() => offset < total && dispatch(loadMore(offset))} // load more when the user scrolls to the bottom of the page and there are more than 30 characters
      loader={isLoading && <Loading />} // loading spinner
      endMessage={
        query !== "" &&
        total === 0 && (
          <h2 className={styles.endMessage}>No characters found</h2>
        )
      } // message to show when there are no characters and the query is not empty
    >
      <div className={styles.container}>
        {characters.map((character, index) => {
          return <Card key={index} character={character} />; // pass the character to the Card component
        })}
      </div>
    </InfiniteScroll>
  );
};

export default CardContainer;
