import React from "react";
import "./Filters.css";
import { useState } from "react";

const timeOptions = [15, 30, 60];
const wordCount = [10, 25, 100];

const Filters = (props) => {
  const [modeWords, setModeWords] = useState(true);

  const handleSelectOption = (number) => {
    console.log(number.item);
    props.selectOption(number.item);
  };
  const selectTime = (number) => {
    console.log(number.item);
    props.selectTime(number.item);
  };

  return (
    <>
      <div className="filters">
        <select
          className="difficulties"
          onChange={(e) => props.selectDiff(e.target.value)}
        >
          <option className="difficulty">easy</option>
          <option className="difficulty">hard</option>
        </select>
        <span
          className={modeWords ? "selected" : ""}
          onClick={() => {
            props.selectMode(true);
            setModeWords(true);
          }}
        >
          words
        </span>
        <span
          className={!modeWords ? "selected" : ""}
          onClick={() => {
            props.selectMode(false);
            setModeWords(false);
          }}
        >
          time
        </span>
        <div className="options">
          <ul className="options__list">
            {!props.mode &&
              timeOptions.map((item, index) => (
                <li key={index} onClick={() => selectTime({ item })}>
                  {item}
                </li>
              ))}
            {props.mode &&
              wordCount.map((item, index) => (
                <li key={index} onClick={() => handleSelectOption({ item })}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filters;
