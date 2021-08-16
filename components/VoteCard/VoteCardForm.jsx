import React from "react";
import PropTypes from "prop-types";
import VoteIcon from "../icon/VoteIcon";
import styles from "../../styles/components/VoteCard/VoteCardForm.module.scss";

function VoteCardForm(props) {
  return (
    <form className={styles.form}>
      <VoteIcon name="positive" />
      <VoteIcon name="negative" />
      <button type="submit" className={styles.button}>
        Vote Now
      </button>
    </form>
  );
}

VoteCardForm.propTypes = {};

export default VoteCardForm;
