/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/components/VoteCard/VoteCardProgress.module.scss";

function VoteCardProgress({ votes, mode }) {
  const { positive, negative } = votes;
  const total = positive + negative;
  const positivePercentage = (positive * 100) / total;
  const negativePercentage = (negative * 100) / total;
  return (
    <div className={`${styles.container} ${styles[mode] || ""}`}>
      <div
        style={{ width: `${positivePercentage}%` }}
        className={styles.positive}
      >
        <img
          src="/assets/img/thumbs-up.svg"
          alt="thumbs up"
          width={16}
          height={16}
        />{" "}
        {positivePercentage.toFixed(1)}%
      </div>
      <div
        style={{ width: `${negativePercentage}%` }}
        className={styles.negative}
      >
        {negativePercentage.toFixed(1)}%
        <img
          src="/assets/img/thumbs-down.svg"
          alt="thumbs up"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}

VoteCardProgress.propTypes = {
  votes: PropTypes.object.isRequired,
  mode: PropTypes.string,
};

export default VoteCardProgress;
