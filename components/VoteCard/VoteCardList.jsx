import React from "react";
import { data } from "../../public/assets/data.json";
import VoteCard from "./VoteCard";
import styles from "../../styles/components/VoteCard/VoteCardList.module.scss";

export default function VoteCardList() {
  return (
    <>
      <h2 className={styles.title}>Previous Rulings</h2>
      <div className={styles.container}>
        <div className={styles.scroll}>
          {data?.map(
            ({ picture, name, description, votes, category, lastUpdated }) => (
              <VoteCard
                key={name}
                picture={picture}
                name={name}
                description={description}
                votes={votes}
                category={category}
                lastUpdated={lastUpdated}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
