import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/components/VoteCard.module.scss";
import VoteCardCaption from "./VoteCardCaption";

function VoteCard(props) {
  const imageSize = props.mode.toLowerCase() === "list" ? "-small" : "";
  return (
    <div className={`${styles.card} ${styles[props.mode] || ""}`}>
      <figure className={styles.thumbnail}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className={styles.image}
          srcSet={`/assets/img/${
            props.data.picture
          } 750w, /assets/img/${props.data.picture?.replace(
            /\.png/gi,
            `${imageSize}@2x.png`
          )} 1440w`}
          sizes="(min-width: 750px) 1440px, 100vw"
          src={`/assets/img/${props.data.picture}`}
          alt={props.data.name}
          width={300}
          height={300}
        />
        <VoteCardCaption data={props.data} mode={props.mode} />
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
  mode: PropTypes.string,
};

export default VoteCard;
