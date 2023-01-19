import React from "react";
import "./Modal.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  let currentDate = Math.round(+new Date() / 1000);
  const seconds = props.modeWords ? currentDate - props.Time : props.Time;

  const navigate = useNavigate();

  return (
    <>
      <div className="background"></div>

      <div className="modal">
        <div className="modal__content">
          <div className="result">
            <span className="title">words</span>
            <span>{props.wordCount}</span>
          </div>
          <div className="result">
            <span className="title">seconds</span>
            <span>{seconds}</span>
          </div>
          <div className="result">
            <span className="title">wpm</span>
            <span>{Math.ceil((60 / seconds) * props.wordCount)}</span>
          </div>
        </div>
        <div className="modal__actions">
          <RestartAltIcon
            className="restart"
            onClick={() => {
              props.showModal(false);
              props.Count();
            }}
          >
            Restart
          </RestartAltIcon>
          <div className="signIn">
            <span
              className="signInLink"
              onClick={() => {
                navigate("/login");
              }}
            >
              sign in
            </span>{" "}
            <span>to save your results</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
