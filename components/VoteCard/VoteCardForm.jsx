import React, { useState } from "react";
import PropTypes from "prop-types";
import VoteIcon from "../icon/VoteIcon";
import styles from "../../styles/components/VoteCard/VoteCardForm.module.scss";
import votesApi from "../../utils/api/votesApi";

function VoteCardForm(props) {
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let res;
    if (type) {
      try {
        res = await votesApi.addVotes(props._id, type);
        console.log(`res`, res);
        if (props.onFinish) props.onFinish(true, res);
      } catch (error) {
        console.log(`error`, error);
        if (props.onFinish) props.onFinish(false);
      }
    } else {
      if (props.onFinish) props.onFinish(false);
    }
    setSuccess((success) => !success);

    setType("");
  };
  //Disable Vote Now button when no type selected and not success
  const disabledButton = !type && !success;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {!success && (
        <>
          <VoteIcon name="positive" onClick={() => setType("positive")} />
          <VoteIcon name="negative" onClick={() => setType("negative")} />
        </>
      )}

      <button type="submit" className={styles.button} disabled={disabledButton}>
        {success ? "Vote Again" : "Vote Now"}
      </button>
    </form>
  );
}

VoteCardForm.propTypes = {
  _id: PropTypes.string,
};

export default VoteCardForm;
