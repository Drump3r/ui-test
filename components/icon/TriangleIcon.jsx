import React from "react";
import PropTypes from "prop-types";

function TriangleIcon(props) {
  return (
    <svg
      width={props.width || "11"}
      height={props.height || "7"}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z"
        fill="#333333"
      ></path>
    </svg>
  );
}

TriangleIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default TriangleIcon;
