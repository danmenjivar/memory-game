import React from "react";
function GameTile(props) {
  return (
    <div>
      <button onClick={() => props.handleClick(props.name)}>
        <img src={props.src} alt={props.name} />
        <div>{props.name}</div>
      </button>
    </div>
  );
}

export default GameTile;
