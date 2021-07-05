import "./styles/App.css";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScores = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <GameBoard
        scoreHelpers={{
          updateScores: updateScores,
          resetScore: resetScore,
        }}
      />
    </div>
  );
}

export default App;
