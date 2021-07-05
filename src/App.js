import "./styles/App.css";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";

function App(props) {
  return (
    <div className="App">
      <Scoreboard />
      <GameBoard />
    </div>
  );
}

export default App;
