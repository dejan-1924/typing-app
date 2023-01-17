import React from "react";
import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ max, showModal, isInit }) => {
  const [timeLeft, setTimeLeft] = useState(max);
  useEffect(() => {
    // exit early when we reach 0

    if (timeLeft === 0) {
      console.log(timeLeft);
      setTimeLeft(null);
      showModal(true);
      isInit(true);
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <React.Fragment>
      <p className="timer">{timeLeft}</p>
    </React.Fragment>
  );
};

export default Timer;
