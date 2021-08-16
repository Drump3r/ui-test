import React from "react";
// import { data } from "../../public/assets/data.json";
import VoteCard from "./VoteCard";
import styles from "../../styles/components/VoteCard/VoteCardList.module.scss";
import votesApi from "../../utils/api/votesApi";

function VoteCardList({ votes }) {
  return (
    <>
      <h2 className={styles.title}>Previous Rulings</h2>
      <div className={styles.container}>
        <div className={styles.scroll}>
          {votes?.map((data) => (
            <VoteCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default VoteCardList;
