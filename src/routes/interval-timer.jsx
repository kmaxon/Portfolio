import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../components/interval-timer.css";
import Timer from "../components/interval-timer-components/timer.jsx";
import alarmSound from "../components/interval-timer-components/alarm.wav";


export default function IntervalTimer() {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [changeable, setChangeable] = useState(true);
  const [timer, setTimer] = useState(sessionTime * 60);
  const [minutes, setMinutes] = useState(Math.floor(timer / 60));
  const [seconds, setSeconds] = useState(timer % 60);
  const [switchTimer, setSwitchTimer] = useState("Session");
  const [alarm] = useState(new Audio(alarmSound));

  // takes a time (in minutes * 60) and sets minutes and seconds accordingly
  function handleTime(time) {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
  };

  // handles onClick events for the up and down arrows
  function onClick(arrow, handleFunction, input) {
    if (changeable){
      if (arrow.match("up") && input < 60) {
        handleFunction(input + 1);
        if (input === sessionTime) {
          if (handleFunction !== setBreakTime){
            handleTime((input * 60) + 60);
            setTimer((input * 60) + 60);
          };
        };
      } else if (arrow.match("down") && input > 1) {
        handleFunction(input - 1);
        if (input === sessionTime) {
          if (handleFunction !== setBreakTime) {
            handleTime((input * 60) - 60);
            setTimer((input * 60) - 60);
          };
        };
      };
    };
  };

  return (
    <div id='interval-timer-container' >
      <div id='interval-timer' >
        <h1 id='timer-title' >Interval Timer</h1>
        <div id="break-label" className='length' >
          <h3 className='title' >Break Length</h3>
          <button 
            id="break-decrement"
            className="button"
            onClick={() => onClick("down", setBreakTime, breakTime)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <p className='time' >{breakTime}</p>  
          <button 
            id="break-increment"
            className="button"
            onClick={() => onClick("up", setBreakTime, breakTime)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        <Timer 
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          changeable={changeable}
          setChangeable={setChangeable}
          timer={timer}
          setTimer={setTimer}
          minutes={minutes}
          seconds={seconds}
          handleTime={handleTime}
          switchTimer={switchTimer}
          setSwitchTimer={setSwitchTimer}
          alarm={alarm}
        />
        <div id="session-label" className='length'>
          <h3 className='title' >Session Length</h3>
          <button 
            id="session-decrement"
            className="button"
            onClick={() => onClick("down", setSessionTime, sessionTime)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <p className='time' >{sessionTime}</p>
          <button 
            id="session-increment"
            className="button"
            onClick={() => onClick("up", setSessionTime, sessionTime)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
}
