import React from "react";
import Filters from "../components/Filters";
import "./Home.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Timer from "../components/Timer";
import Modal from "../components/Modal";
import wordsPH from "../words";

const Home = () => {
  const [count, setCount] = useState(0);
  const [modeWords, setModeWords] = useState(true);
  const [wordCount, setWordCount] = useState(10);
  const [time, setTime] = useState(15);
  const [timer, setTimer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [words, setWords] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const inputRef = useRef();

  const mixWords = useCallback(
    (words) => {
      const mixedWords = words.sort(function () {
        return Math.random() - 0.5;
      });
      let spacedMixedWords = mixedWords.map((word) => {
        return word + " ";
      });
      return spacedMixedWords.splice(words.length - wordCount);
    },
    [wordCount]
  );

  useEffect(() => {
    if (difficulty === "hard") {
      fetch(`https://random-word-api.herokuapp.com/word?number=${wordCount}`)
        .then((response) => response.json())
        .then((data) => {
          const spacedWords = data.map((word) => {
            return word + " ";
          });
          console.log(data);
          setWords(spacedWords);
        });
    } else {
      let newWords = mixWords([...wordsPH]);
      setWords(newWords);
    }
  }, [wordCount, difficulty, modeWords, mixWords]);

  const newTry = () => {
    setTimer(false);
    setIsInitial(true);
    setCount(0);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleChangeDifficulty = (difficulty) => {
    setDifficulty(difficulty);
    newTry();
  };

  const handleChangeWordOption = (number) => {
    setWordCount(number);
    newTry();
  };

  const handleChangeTimeOption = (number) => {
    setTime(number);
    newTry();
  };

  const handleChangeMode = (mode) => {
    mode ? setWordCount(10) : setWordCount(200);
    setModeWords(mode);
    newTry();
  };

  const stopTimer = () => {
    setTimer(false);
  };

  const handleShowModal = (value) => {
    setShowModal(value);
    if (!value) {
      stopTimer();
      if (difficulty === "hard") {
        fetch(`https://random-word-api.herokuapp.com/word?number=${wordCount}`)
          .then((response) => response.json())

          .then((data) => {
            const spacedWords = data.map((word) => {
              return word + " ";
            });
            setWords(spacedWords);
          });
      } else {
        let newWords = mixWords([...wordsPH]);
        setWords(newWords);
      }
    }
  };

  const handleInitial = (value) => {
    setIsInitial(value);
  };

  const handleKeyPress = (event) => {
    if (isInitial) {
      setTimer(true);
      setIsInitial(false);
      setCurrentTime(Math.round(+new Date() / 1000));
    }

    if (event.key === "Enter" || event.key === " ") {
      let typedWord = event.target.value + " ";
      if (typedWord[0] === " ") {
        typedWord = typedWord.substring(1);
      }

      if (typedWord === words[0]) {
        if (modeWords && count === wordCount - 1) {
          setShowModal(true);
          setIsInitial(true);
        }
        const [, ...rest] = words;
        setWords(rest);
        setCount((prevState) => prevState + 1);
      } else {
      }
      event.target.value = "";
    } else {
    }
  };

  return (
    <div className="home">
      <Filters
        selectOption={handleChangeWordOption}
        selectMode={handleChangeMode}
        selectTime={handleChangeTimeOption}
        selectDiff={handleChangeDifficulty}
        mode={modeWords}
      ></Filters>
      <main className="home__main">
        {showModal && (
          <Modal
            modeWords={modeWords ? true : false}
            wordCount={count}
            Time={modeWords ? currentTime : time}
            showModal={handleShowModal}
            Count={() => {
              setCount(0);
            }}
          ></Modal>
        )}
        {!modeWords && timer && (
          <Timer
            max={time}
            showModal={handleShowModal}
            isInit={handleInitial}
          />
        )}
        {modeWords && (
          <div className="count">
            {count}|{wordCount}
          </div>
        )}
        <p className="words">
          {words?.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </p>
        {!showModal && (
          <input
            type="text"
            className="textInput"
            ref={inputRef}
            onKeyDown={handleKeyPress}
          ></input>
        )}
      </main>
    </div>
  );
};

export default Home;
