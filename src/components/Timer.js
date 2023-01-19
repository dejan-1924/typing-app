import React from "react";
import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ max, showModal, isInit }) => {
  const [timeLeft, setTimeLeft] = useState(max);
  if (timeLeft === 0) {
    setTimeLeft(null);
    showModal(true);
    isInit(true)
  }

  useEffect(() => {


    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      <p className="timer">{timeLeft}</p>
    </>
  );
};

export default Timer;
