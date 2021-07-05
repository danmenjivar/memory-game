import React from "react";
import "../styles/Scoreboard.css";

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <h1>Memory Game</h1>
      <div>
        <h2>Score: {props.score}</h2>
        <h2>High Score: {props.bestScore}</h2>
      </div>
    </div>
  );
}

export default Scoreboard;
