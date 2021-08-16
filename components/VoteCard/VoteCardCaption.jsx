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
    <figcaption className={styles.container}>
      <VoteCardIconResult votes={data.votes} />
      <VoteCardInfo
        name={data.name}
        description={data.description}
        lastUpdated={data.lastUpdated}
        category={data.category}
        savedText={savedText}
      />
      <VoteCardForm onFinish={handleFinish} _id={data._id} data={props.data} />
      <VoteCardProgress votes={data.votes} />
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
};

export default VoteCardCaption;
