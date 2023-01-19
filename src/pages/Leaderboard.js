import React from "react";
import "./Leaderboard.css";
import ListItem from "../components/ListItem";
import { useState } from "react";

const easy_results = [
  { username: "user1", wpm: "155" },
  { username: "user2", wpm: "145" },
  { username: "user3", wpm: "130" },
  { username: "user4", wpm: "105" },
  { username: "user5", wpm: "90" },
];
const hard_results = [
  { username: "user1", wpm: "50" },
  { username: "user2", wpm: "45" },
  { username: "user3", wpm: "45" },
  { username: "user4", wpm: "42" },
  { username: "user5", wpm: "40" },
];

const difficulties = ["easy", "hard"];

const Leaderboard = () => {
  const [difficultyState, setDifficultyState] = useState("easy");

  const changeDiffHandler = (diff) => {
    setDifficultyState(diff);
  };

  return (
    <div className="leaderboard">
      <div className="leadearboard__difficulties">
        {difficulties.map((difficulty, index) => (
          <span
            key={index}
            className={`leadearboard__difficulty ${
              difficultyState === difficulty ? "selected__diff" : ""
            }`}
            onClick={() => {
              changeDiffHandler(difficulty);
            }}
          >
            {difficulty}
          </span>
        ))}
      </div>

      <div className="leaderboard__container">
        {difficultyState === "easy" &&
          easy_results.map((result, index) => {
            return (
              <ListItem key={index} results={result} index={index}></ListItem>
            );
          })}
        {difficultyState === "hard" &&
          hard_results.map((result, index) => {
            return (
              <ListItem key={index} results={result} index={index}></ListItem>
            );
          })}
      </div>
    </div>
  );
};

export default Leaderboard;
