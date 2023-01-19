import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="listItem">
      <>
        <span className={` ${props.index === 0 ? "first" : ""}`}>
          {props.index + 1}. {props.results.username}
        </span>
        <span>{props.results.wpm}</span>
      </>
    </div>
  );
};

export default ListItem;
