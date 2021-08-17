import React from "react";
import PropTypes from "prop-types";
import {
  getDateDistance,
  toTitleCase,
  truncateText,
} from "../../utils/stringUtils";

import styles from "../../styles/components/VoteCard/VoteCardInfo.module.scss";

function VoteCardInfo({
  name,
  description,
  lastUpdated,
  category,
  savedText,
  mode,
}) {
  return (
    <div className={`${styles.container} ${styles[mode] || ""}`}>
      <h3 className={styles.title}>{truncateText(name, 21)}</h3>
      <p className={styles.description}>{truncateText(description, 63)}</p>
      <small className={styles.date}>
        {savedText ||
          `${getDateDistance(lastUpdated)} in ${toTitleCase(category)}`}
      </small>
    </div>
  );
}

VoteCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default VoteCardInfo;
