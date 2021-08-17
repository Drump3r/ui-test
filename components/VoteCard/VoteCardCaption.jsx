import React, { useState } from "react";
import PropTypes from "prop-types";
import VoteCardInfo from "./VoteCardInfo";
import VoteCardForm from "./VoteCardForm";
import VoteCardProgress from "./VoteCardProgress";
import VoteCardIconResult from "./VoteCardIconResult";
import styles from "../../styles/components/VoteCard/VoteCardCaption.module.scss";

function VoteCardCaption(props) {
  const [data, setData] = useState(props.data);
  const [savedText, setSavedText] = useState("");
  const handleFinish = (success, updatedData) => {
    console.log(`success`, success);
    updatedData && setData(updatedData);
    if (success) {
      setSavedText("Thank you for your vote!");
    } else {
      setSavedText("");
    }
  };
  return (
    <figcaption className={`${styles.container} ${styles[props.mode] || ""}`}>
      <VoteCardIconResult votes={data.votes} mode={props.mode} />
      <VoteCardInfo
        name={data.name}
        description={data.description}
        lastUpdated={data.lastUpdated}
        category={data.category}
        savedText={savedText}
        mode={props.mode}
      />
      <VoteCardForm
        onFinish={handleFinish}
        _id={data._id}
        data={props.data}
        mode={props.mode}
      />
      <VoteCardProgress votes={data.votes} mode={props.mode} />
    </figcaption>
  );
}

VoteCardCaption.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  votes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default VoteCardCaption;
