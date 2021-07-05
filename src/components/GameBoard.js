import "../styles/GameBoard.css";
import GameTile from "./GameTile";
import toys from "../toys";

import React from "react";

function GameBoard() {
  const shuffleBoard = () => {
    toys.sort(() => Math.random() - 0.5);
  };

  shuffleBoard();
  return (
    <div className="GameBoard">
      {[...Array(16)].map((elem, i) => (
        <GameTile img={toys[i]} />
      ))}
    </div>
  );
}

export default GameBoard;
