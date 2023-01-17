import React from "react";
import Filters from "../components/Filters";
import "./Home.css";
import { useState, useEffect, useCallback } from "react";
import Timer from "../components/Timer";
import Modal from "../components/Modal";

const Home = () => {
  const [wordsPH, setWordsPH] = useState([
    "a ",
    "about ",
    "all ",
    "also ",
    "and ",
    "as ",
    "at ",
    "be ",
    "because ",
    "but ",
    "by ",
    "can ",
    "new ",
    "no ",
    "not ",
    "now ",
    "of ",
    "on ",
    "one ",
    "only ",
    "or ",
    "other ",
    "our ",
    "out ",
    "people ",
    "say ",
    "see ",
    "she ",
    "so ",
    "some ",
    "take ",
    "tell ",
    "than ",
    "that ",
    "the ",
    "their ",
    "them ",
    "then ",
    "there ",
    "these ",
    "they ",
    "thing ",
    "think ",
    "this ",
    "those ",
    "time ",
    "to ",
    "two ",
    "up ",
    "use ",
    "very ",
    "want ",
    "way ",
    "we ",
    "well ",
    "what ",
    "when ",
    "which ",
    "who ",
    "will ",
    "with ",
    "would ",
    "year ",
    "you ",
    "your ",
  ]);
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

  const mixWords = (words) => {
    const mixedWords = words.sort(function () {
      return Math.random() - 0.5;
    });
    return mixedWords;
  };

  useEffect(() => {
    if (difficulty == "hard") {
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
      setWords(mixWords(wordsPH));
    }
  }, [wordCount, difficulty]);

  const handleChangeDifficulty = (difficulty1) => {
    setDifficulty(difficulty1);
  };

  const handleChangeWordOption = (number) => {
    setWordCount(number);
  };

  const handleChangeTimeOption = (number) => {
    setTime(number);
    setWordCount(100);
  };

  const handleChangeMode = (mode) => {
    mode ? setWordCount(10) : setWordCount(100);
    setModeWords(mode);
  };

  const stopTimer = () => {
    setTimer(false);
  };

  const handleShowModal = (value) => {
    setShowModal(value);
    if (!value) {
      stopTimer();
      if (difficulty == "hard") {
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
        setWords(mixWords(wordsPH));
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
      if (typedWord[0] == " ") {
        typedWord = typedWord.substring(1);
      }

      if (typedWord === words[0]) {
        if (modeWords && count === wordCount - 1) {
          setShowModal(true);
          setIsInitial(true);
        }
        let a = words[0];
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
        {!showModal && <input
          type="text"
          className="textInput"
          onKeyPress={handleKeyPress}
        ></input>}
      </main>
    </div>
  );
};

export default Home;
