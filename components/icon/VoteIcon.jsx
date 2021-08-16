/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/components/icon/VoteIcon.module.scss";

function ImageIcon({ name }) {
  if (name === "positive") {
    return (
      <img
        src="/assets/img/thumbs-up.svg"
        alt="thumbs up"
        width={16}
        height={16}
      />
    );
  }
  if (name === "negative") {
    return (
      <img
        src="/assets/img/thumbs-down.svg"
        alt="thumbs up"
        width={16}
        height={16}
      />
    );
  }
  return null;
}

function VoteIcon({ name }) {
  return (
    <button type="button" className={`${styles.button} ${styles[name]}`}>
      <ImageIcon name={name} />
    </button>
  );
}

VoteIcon.propTypes = {
  name: PropTypes.oneOf(["positive", "negative"]).isRequired,
};

export default VoteIcon;
