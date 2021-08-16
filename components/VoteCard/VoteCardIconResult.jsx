import React from "react";
import PropTypes from "prop-types";
import VoteIcon from "../icon/VoteIcon";

import styles from "../../styles/components/VoteCard/VoteCardIconResult.module.scss";

function VoteCardIconResult({ votes }) {
  const iconName = votes?.positive >= votes?.negative ? "positive" : "negative";
  return (
    <div className={styles.container}>
      <VoteIcon name={iconName} />
    </div>
  );
}

VoteCardIconResult.propTypes = {
  votes: PropTypes.object.isRequired,
};

export default VoteCardIconResult;
