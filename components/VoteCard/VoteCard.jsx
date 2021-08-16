import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/components/Item.module.scss";
import VoteCardCaption from "./VoteCardCaption";

function VoteCard(props) {
  return (
    <div className={styles.card}>
      <figure className={styles.thumbnail}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className={styles.image}
          srcSet={`/assets/img/${
            props.picture
          } 750w, /assets/img/${props.picture?.replace(
            /\.png/gi,
            "@2x.png"
          )} 1440w`}
          sizes="(min-width: 750px) 1440px, 100vw"
          src={`/assets/img/${props.picture}`}
          alt={props.name}
          width={300}
          height={300}
        />
        <VoteCardCaption
          name={props.name}
          description={props.description}
          lastUpdated={props.lastUpdated}
          votes={props.votes}
          category={props.category}
        />
      </figure>
    </div>
  );
}

VoteCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  votes: PropTypes.object.isRequired,
};

export default VoteCard;
