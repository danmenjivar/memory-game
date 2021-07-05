import "../styles/GameBoard.css";
import GameTile from "./GameTile";
import toys from "../toys";

import React, { useState, useEffect } from "react";

function GameBoard(props) {
  const [tiles, setTiles] = useState([...toys]);
  const [streak, setStreak] = useState([]);

  const { updateScores, resetScore } = props.scoreHelpers;

  const shuffleBoard = () => {
    const shuffledTiles = [...tiles];
    shuffledTiles.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
  };

  const addToStreak = (toy) => {
    console.log("Adding " + toy + " to streak.");
    const streakCopy = [...streak, toy];
    setStreak(streakCopy);
  };

  const clearStreak = () => setStreak([]);

  const handleClick = (toy) => {
    console.log("HandleClick listener");
    shuffleBoard();
    const isStreakBroken = streak.includes(toy);
    if (!isStreakBroken) {
      // if streak isn't broken, increment score
      addToStreak(toy);
      updateScores();
    } else {
      // clear streak and reset score
      clearStreak();
      resetScore();
    }
  };

  useEffect(() => {
    shuffleBoard();
  }, []);

  return (
    <div className="GameBoard">
      {tiles.map((elem, i) => (
        <GameTile
          key={i}
          src={tiles[i].src}
          name={tiles[i].name}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default GameBoard;
