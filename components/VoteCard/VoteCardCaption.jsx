import React from "react";
import PropTypes from "prop-types";
import VoteCardInfo from "./VoteCardInfo";
import VoteCardForm from "./VoteCardForm";
import VoteCardProgress from "./VoteCardProgress";
import VoteCardIconResult from "./VoteCardIconResult";
import styles from "../../styles/components/VoteCard/VoteCardCaption.module.scss";

function VoteCardCaption(props) {
  return (
    <figcaption className={styles.container}>
      <VoteCardIconResult votes={props.votes} />
      <VoteCardInfo
        name={props.name}
        description={props.description}
        lastUpdated={props.lastUpdated}
        category={props.category}
      />
      <VoteCardForm />
      <VoteCardProgress votes={props.votes} />
    </figcaption>
  );
}

VoteCardCaption.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  votes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default VoteCardCaption;
